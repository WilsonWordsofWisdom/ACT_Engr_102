# Troubleshooting log

Record every solved issue here so it's never re-debugged from scratch.
Append, don't delete.

---

### Dashboard and `/api/engagements` showed different phase data

**Symptom:** After changing an engagement's phase on `/dashboard`, calling
`GET /api/engagements` directly still returned the old phase, even though
the dashboard itself showed the new phase correctly.

**Root cause:** `lib/data/engagements.ts` kept its mutable store in a
plain module-level `let`. Next.js dev mode (Turbopack) compiles Route
Handlers and Server Component/Action code as separate bundles, and each
bundle got its own evaluation of the module — so the Route Handler and
the dashboard's Server Action were mutating two different in-memory
arrays that happened to share source code but not state.

**Fix:** Store the array on `globalThis` instead, guarded by a getter that
seeds it on first access. `globalThis` is shared across bundles within the
same Node process, so all entrypoints now read/write the same store. See
`docs/decisions.md` for the decision record.

**Verification:** Changed a phase on `/dashboard`, then confirmed
`GET /api/engagements` reflected the same phase and timestamp
immediately, in a second browser tab sharing the session cookie.

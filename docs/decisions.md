# Decisions log

Append-only. Add a new entry for every consequential decision — don't
edit or delete past entries, even if later superseded (note the
supersession in the new entry instead).

---

### 2026-09-21 — Mock data store instead of real Supabase project

**Decision:** The baseline uses an in-memory mock store shaped like a
database table, not a real Supabase/Postgres instance.

**Why:** The lab is 90 minutes for non-technical trainees. Provisioning
real cloud projects (or sharing one project's credentials across a cohort)
costs setup time and risks trainees interfering with each other's data.
The mock store keeps the View/Controller/Data teaching model intact
without the cloud dependency.

**Consequence:** Slide references to Supabase RLS are demonstrated as a
code-level access check (`lib/auth/session.ts` + the session cookie), not
a live database policy. This is flagged explicitly in
`docs/security-checklist.md` as a prototype limitation.

---

### 2026-09-21 — Mock cookie session instead of real auth provider

**Decision:** Sign-in is a cookie set to a consultant's name, no password,
no identity provider.

**Why:** Matches the lab's goal — exercise the lifecycle and the
authenticated/unauthenticated behaviour difference (see
`docs/tests/engagement-tracker.feature`) without spending lab time on
provider setup.

**Consequence:** This is explicitly not a real security boundary. Documented
in `lib/auth/session.ts` and `docs/security-checklist.md`.

---

### 2026-09-21 — Engagement store keyed on `globalThis`, not a module `let`

**Decision:** `lib/data/engagements.ts` keeps its mutable store on
`globalThis` instead of a plain module-level variable.

**Why:** Found during baseline verification — Next.js dev (Turbopack)
evaluated the module separately for the Route Handler bundle and the
Server Component/Action bundle, so a plain module variable gave each
bundle its own copy and `/api/engagements` silently showed stale data
after a dashboard phase change. See `docs/troubleshooting.md` for the
full diagnosis.

**Consequence:** State still resets on dev-server restart (deterministic
reset for the lab), but is now consistent across all routes within one
running process.

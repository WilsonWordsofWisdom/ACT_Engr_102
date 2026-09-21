# Security checklist (prototype hygiene, not accreditation)

Run this in the lab's Module 5. Ask a **fresh** Claude Code conversation to
review the diff — do not let the same session that wrote the code also
grade it, and do not let the reviewer "fix as it goes." Record findings
first; only authorise remediation after you've read them.

- [ ] No secrets in prompts, source or Git.
- [ ] Synthetic training data only (see `docs/PRD.md` §6).
- [ ] Access-control assumptions identified — for this app, that means:
      every consultant can see and edit every engagement (no per-owner
      restriction exists). Confirm any new code doesn't silently assume
      otherwise.
- [ ] User inputs validated (e.g. the phase-change note, once built,
      rejects empty/oversized input server-side, not just in the UI).
- [ ] New dependencies checked (exists on the public registry, plausible
      age/maintainer/downloads) before installing.
- [ ] Error paths do not leak sensitive detail (stack traces, internal
      paths) to the client.
- [ ] Fresh security-focused review completed for the diff.
- [ ] Prototype limitations documented in `docs/HANDOVER.md`.

## Known baseline limitations (already true, not lab findings)

These are intentional simplifications for the training lab — call them out
in any review rather than "discovering" them as new bugs:

- **Auth is a mock cookie**, not a real identity provider
  (`lib/auth/session.ts`). No password, no expiry, no real session
  invalidation.
- **No per-consultant access control** — any signed-in consultant can edit
  any engagement.
- **Data is an in-memory mock store**, not a real database — there is no
  encryption at rest, backup, or multi-user concurrency story beyond what
  `docs/architecture.md` describes.

None of the above should be "fixed" during the lab unless the trainer
explicitly asks for it — they are out of scope for the bounded feature.

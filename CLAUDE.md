# CLAUDE.md — ACT Engineering 102 training lab

This is a **training repository** for the ACT Engineering 102 lab
("Vibe Engineering for Forward-Deployed Engineers"). It is self-contained
so the lab works even if a trainee hasn't set up the global
ClaudeThisIsTheWay configuration yet. The global setup
(`~/.claude/`) remains the standard for real client projects — this file
is a lab-scoped subset of it.

## What this repo already is

A **working baseline app** — the ACT Client Engagement Tracker
(Next.js). It runs today with synthetic data. Do not scaffold a new app,
invent a new database, or redesign existing screens. See
`training/LAB.md` for what you do NOT need to do.

## The one thing you're building

One bounded feature, described in `docs/PRD.md` §7: a short note on
phase change, with retained history, surfaced on the dashboard. Move it
through the stages below, in order, using `training/PROMPTS.md` as a
starting point for each stage's prompt.

## Lifecycle stages (follow in order)

| Stage | Do this | Living doc |
|---|---|---|
| **Discovery** | Ask clarifying questions before touching code. Confirm users, exact behaviour, non-goals, success measure, data classification. | `docs/PRD.md` |
| **Design** | Decide the UI interaction and its states (loading/empty/validation-error/success) before building it. Figma Make (`design/figma-make-prompt.md`) is optional and accelerates this — it never replaces it. | `docs/design.md` |
| **Architecture** | Inspect the current code and explain which View, Controller and Data pieces must change. Propose the smallest plan and tests. Stop for approval before editing. | `docs/architecture.md` |
| **Build** | Implement only the approved slice. Don't change unrelated behaviour. Explain the diff in plain English afterward. | code + `docs/decisions.md` |
| **Verify** | Use `docs/tests/engagement-tracker.feature` as the behaviour reference. Run `npm run verify`. Test the happy path and at least one failure/validation path manually. | `docs/tests/` |
| **Harden** | Run `docs/security-checklist.md` in a **fresh** conversation, review-only — don't let the reviewer fix as it goes. Record findings before authorising any fix. | `docs/security-checklist.md` |
| **Hand over** | Fill in `docs/HANDOVER.md` — intended vs. implemented behaviour, evidence, limitations, next step. | `docs/HANDOVER.md` |

**Always on, every stage:** treat this as a very fast junior engineer, not
an oracle — inspect its diffs, don't just watch the browser.

## The View / Controller / Data mental model

A UI change can imply logic and data changes even when you can't see them
on screen. This app's layers:

- **View** — `app/**/page.tsx`
- **Controller** — Server Actions (`app/**/actions.ts`) and Route
  Handlers (`app/api/**/route.ts`)
- **Data** — `lib/data/engagements.ts`

See `docs/architecture.md` for the current diagram. When the feature
request touches the dashboard, check all three layers, not just the one
that's visually obvious.

## Doom-loop circuit breaker

If the same issue has failed to fix twice, **stop**. Do not send a third
repair prompt. Start a fresh conversation and ask for diagnosis only —
"do not edit any files; inspect the relevant code and logs and report the
most likely root cause and the smallest safe fix." Only authorise the fix
after you've reviewed that diagnosis.

## Lab-specific rules (always on)

1. **Synthetic data only.** Every client, consultant and engagement in
   this repo is fictional. Never add real client, agency, or personal
   data — not even for realism.
2. **No secrets.** This app currently has none to configure. If a later
   change introduces any (API keys, tokens), they go in `.env.local`
   (gitignored), referenced by name only — never pasted into chat or
   committed.
3. **Human approval before irreversible actions.** No `git push`, no
   deploy, no deleting files outside what the approved plan covers,
   without explicit sign-off first.
4. **Don't touch `deploy/rabbitdeploy/`** beyond reading it — it's
   context on the real delivery path, not something this lab configures.
5. **This is a prototype, not production.** Nothing built here is
   approved for real client data or a production environment. See
   `deploy/rabbitdeploy/README.md` and `docs/HANDOVER.md`.

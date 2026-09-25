# Vibe Engineering Lab — participant guide

90-minute full-lifecycle lab. Prepared project: **ACT Client Engagement
Tracker**. Toolchain: VS Code + GitHub + Claude Code.

> Working prototype only. Productionisation is handed to
> engineering/platform owners — see `deploy/rabbitdeploy/README.md`.

> This lab covers Discovery through Hand Over. It does **not** include a
> Measure stage, even though the full ClaudeThisIsTheWay lifecycle has
> one — a 90-minute first exposure session doesn't have room for
> meaningful telemetry on a single bounded feature. Measure stays part
> of the full lifecycle and is earmarked for a deeper follow-on module.

## Before you start

- VS Code installed, can open a local folder.
- GitHub account available; you can clone this repo.
- Claude Code installed and able to start a coding session.
- Do not bring real agency data, credentials, API keys or confidential
  client material into this lab. Everything here is synthetic.

## The feature request

Starting repo: this one. It already runs and contains synthetic
engagement data and lifecycle artefacts. **Do not recreate the
application.**

> Add a short note whenever an engagement changes phase, retain the
> phase-change history, and surface the history on the dashboard.

## Module 1 — Setup / Agent Governance

- Clone the repository and open the root folder in VS Code.
- Run the baseline: `npm install`, then `npm run dev`. Confirm the
  dashboard loads at the printed local URL (sign in as any consultant).
- Start Claude Code **from the repo root** so `CLAUDE.md` is visible.
- Read `CLAUDE.md` and identify the lifecycle stages and lab-specific
  rules before doing anything else.

**Trainer checkpoint:** everyone can run the baseline before moving on.

## Module 2 — Discovery & Design Gates

- Use the Discovery prompt in `training/PROMPTS.md`. Do not allow code
  edits yet.
- Confirm users, exact phase-history behaviour, non-goals and success
  measure. Update `docs/PRD.md` §7.
- Update `docs/design.md`'s open decision section with the interaction
  and its states.
- Optional: use `design/figma-make-prompt.md` in Figma Make to explore
  the UI and gather feedback quickly.

**Build gate:** "Are we confident enough about what we are building and
why?"

## Module 3 — Architecture & Build

- Use the Architecture prompt in `training/PROMPTS.md`. Ask Claude to
  inspect the current implementation and `docs/architecture.md`, and
  explain which View/Controller/Data pieces must change.
- Approve a small implementation plan and tests before any edit.
- Use the Build prompt to implement only the approved slice.
- Inspect the diff. Ask "what else changed?" before moving on.

**Checkpoint:** you can explain the change in one sentence without
reading the code.

## Module 4 — Verification

- Use `docs/tests/engagement-tracker.feature` as the behaviour reference.
- Run `npm run verify` (lint + typecheck + test).
- Test the happy path manually: change a phase, add a note, view history.
- Test at least one failure path: empty note, or an invalid input.
- Record what passed and what remains unverified.

## Module 5 — Security & Guardrails

- Run through `docs/security-checklist.md`.
- Ask a **fresh** Claude conversation to review the latest diff for
  security issues, without editing code.
- Check secrets, input validation, access-control assumptions,
  dependency changes and error exposure.
- Record findings; only then authorise any remediation.

## Module 6 — Prompting in Practice (optional)

Short on time? Skip straight to Wrap-up — the core lifecycle (Discovery
through Hand Over) is already complete without this module. It
practices a skill, not a new lifecycle stage.

- Take the vague prompt "Add history to the tracker." Rewrite it with
  context, user, behaviour, constraints and proof — see
  `training/PROMPTS.md` for the pattern.
- Ask Claude to inspect and plan before implementing anything.

## Module 7 — Review & Debugging (optional)

Short on time? Skip straight to Wrap-up. Like Module 6, this practices a
skill (the doom-loop recovery move) rather than adding a lifecycle
stage — worth doing if a real "stuck" moment came up earlier in the lab,
otherwise safe to drop.

- Use a fresh context to review the implementation and diff.
- If something is stuck after two attempts, don't keep prompting the same
  session: **STOP → RESET → DIAGNOSE ONLY → VERIFY → FIX** (see
  `CLAUDE.md`'s doom-loop circuit breaker).
- Re-run `npm run verify` after any fix.

## Wrap-up

Follows Module 5 directly if Modules 6–7 were skipped.

- Fill in `docs/HANDOVER.md`.
- Be ready to explain: what changed, what was proven, what remains open.

## Field checklist

| Checkpoint | Question |
|---|---|
| BEFORE | Problem, user, success measure, data sensitivity understood? |
| DISCOVERY | Scope and non-goals explicit? |
| DESIGN | UI behaviour and states agreed? |
| ARCHITECTURE | View / Controller / Data impacts understood? |
| BUILD | Smallest useful slice only? |
| VERIFY | Happy path + failure path + diff inspected? |
| SECURE | Secrets, permissions, untrusted content, inputs checked? |
| HAND OVER | Can another person explain what changed, what was proven, and what remains? |

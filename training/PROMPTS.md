# Copy-paste prompt pack

Use these as starting points, in order, during the lab. Adjust wording as
needed — the shape (context, user, behaviour, constraints, proof) matters
more than the exact words.

**Discovery:**
> Read docs/PRD.md and help me complete Discovery for the phase-history
> feature. Ask clarifying questions about users, behaviour, scope,
> non-goals, success and data classification. Do not edit application
> code yet.

**Design:**
> Review docs/design.md and propose the smallest UI interaction for
> adding a phase-change note and viewing history. Include loading, empty,
> validation-error and success states. Stop for my approval before
> coding.

**Architecture:**
> Inspect the current codebase and docs/architecture.md. Explain which
> View, Controller and Data pieces must change for the approved feature.
> Propose the smallest implementation plan and tests. Do not edit code
> yet.

**Build:**
> Implement only the approved phase-history slice. Do not change
> unrelated features. After coding, explain the files changed, the data
> flow, and any assumptions in plain English.

**Verify:**
> Read docs/tests/engagement-tracker.feature. Run `npm run verify`. For
> each scenario in the feature file, report pass or fail on its own line
> with specific evidence — the automated test name if one covers it, or
> the manual steps taken and what was observed if not. Do not summarize
> in aggregate. If a check fails, diagnose the root cause before changing
> code. End with an explicit "what remains unverified" list — anything
> not covered by a scenario above.

Report one row per scenario, not a grab-bag of whatever got tested —
that's what makes Verify's output visibly different from the ad hoc
checks during Build, which test "does this piece I just wrote work"
rather than "does behaviour match the documented requirement." Restart
the dev server for a clean state before running this, and review the
Build diff yourself before sending this prompt — Verify should feel like
a distinct checkpoint, not Build continuing in the same breath.

**Security review:**
> Do not edit code. Review the latest diff for secrets, access-control
> gaps, input validation issues, unsafe dependency changes, and
> error-message leakage. Record findings only.

**Doom-loop recovery:**
> Do not modify any files. Inspect the relevant logs and code path and
> report the most likely root cause, evidence, and the smallest safe fix.
> Stop after diagnosis.

## Vague → engineerable (Module 6 example)

**Vague:** "Add history to the tracker."

What's missing: who records it, what fields are stored, where it's
displayed, what must not change.

**Engineerable:**
> Add a short note when phase changes; retain previous/new phase, note
> and timestamp; show history from the engagement view; keep existing
> dashboard behaviour unchanged.

Then: inspect → plan → stop → approve → build → explain.

## Trainer prompts to reuse throughout

- "What user behaviour are we changing?"
- "What does this change do to View, Controller and Data?"
- "What is the smallest useful slice?"
- "How will we prove it works?"
- "What changed in the diff that you did not expect?"
- "Start a fresh conversation and diagnose only."

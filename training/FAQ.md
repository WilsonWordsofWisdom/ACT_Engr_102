# FAQ

Real questions from a full dry run of this lab (facilitator + participant
walkthrough, Modules 1 through 5). This is a living doc — add to it as
new questions come up in future cohorts.

## Module 1 — Setup & Agent Governance

**Q: Why is this repo's guidance written into `CLAUDE.md` instead of
just relying on global config?**

A: Claude Code reads `CLAUDE.md` hierarchically — the global
`~/.claude/CLAUDE.md` sets baseline behaviour everywhere; a repo's own
`CLAUDE.md` layers project-specific context on top. Every real client
repo has one. This lab's version is more self-contained (it restates
the lifecycle instead of just pointing at `~/.claude/sop/`) so the lab
works even without the global setup done first.

---

## Module 2 — Discovery & Design

**Q: When should you actually use Figma Make instead of just
describing the UI in prompts?**

A: When the design benefits from live customer collaboration — Figma
Make gives you a shareable link so the customer can view and comment on
specific views, interactions and elements directly, and you can iterate
on their feedback quickly before any code exists. Keep it purely
front-end, no real logic wired up — it's for agreeing on the
interaction, not building the feature. Save in-session mockups
(rendered directly in chat) for fast internal iteration when no
customer is in the loop.

---

## Module 3 — Architecture & Build

**Q: When do you review the Mermaid diagram vs. the `.drawio` file?
What's the difference between them?**

A: The Mermaid diagram (in `docs/architecture.md`) is for a quick,
high-level view of the entire stack's architecture — fast to scan,
rendered inline in the doc. The `.drawio` file is the detailed version:
it can hold multiple pages/sheets, one per layer (e.g. View, Controller,
Data), each a deeper diagram of that layer's tech stack. View it in VS
Code with the drawio integration plugin — and it's a two-way surface,
not just a read: you can edit the canvas directly to propose changes or
correct the stack, and Claude can then read those edits back and factor
them into its own proposals.

**Q: Do I need an implementation plan before Build? When do I need to
update it if the build pivots along the way?**

A: Yes — every build should follow the implementation plan; treat it as
the source of truth, covering every feature, every release, and every
dependency that needs resolving. Always plan and design first,
recording any research spike in the implementation plan, then build. If
something fails during Build and the approach needs to pivot, update
the implementation plan first, before attempting the new approach —
never build ahead of what the plan documents.

**Q: Why does diagnosis after a failed fix need a fresh conversation —
why not continue in the existing session?**

A: After two failed attempts, the session's context is full of wrong
hypotheses — the model is conditioned by what it already tried, so "try
again" tends to repeat the same flawed theory rather than look fresh.
A new conversation has to re-derive the diagnosis from actual evidence,
not a narrative it's already committed to. Pair it with "diagnose only,
no edits" so it doesn't slide from checking into fixing.

---

## Module 4 — Verify

**Q: What's the purpose of the Verify step? What's a good or bad
output, and what's the takeaway?**

A: Breaks the "it works on my screen" habit — vibe coding's definition
of done vs. vibe engineering's (tests, evidence, traceability). Good
output: specific evidence, a failure path tested (not just the happy
path), an honest "what remains unverified" list, traceability to the
actual requirement. Bad output: a vague "it's fine," happy-path only,
trusting the AI's own summary instead of checking independently,
overclaiming coverage. The habit to build: demand evidence, not a
confident summary.

**Q: How is Verify actually different from testing during Build?**

A: Build-stage testing is self-directed — checking a piece against
memory, in the same context that wrote it. Treat it as a first pass,
not proof. A real Verify pass differs three ways: checked against the
documented spec, not memory (can catch the spec itself going stale);
run from a clean/restarted state, not leftover test mutations; a
discrete gate with a defined report, not a continuous stream. Note:
Verify still isn't fully independent — that's Harden's job. If you can
only make one stage rigorous, make it Harden.

---

## Module 5 — Harden

**Q: Does "fresh conversation" for the security review mean literally
starting a new chat?**

A: Yes — not a different prompt in the same chat. A new session sees
the real files and diff with zero memory of writing the code; the same
conversation stays influenced by its own earlier decisions no matter
how you ask it to "look fresh." Committed or not doesn't matter, it
just needs the working tree.

**Q: Should each fix from a security review get its own branch?**

A: No — one branch, one commit per fix. The feature needs a stable
committed base; fixes usually touch the same files (separate branches
would just conflict); feature + fixes are one logical change for
`main`; separate commits already give per-fix readability and revert
without the branch overhead. Order: commit the feature → resolve any
policy-question findings first (record the decision in
`docs/decisions.md`) → fix one at a time, tests after each, finding
number in the commit message → re-run Verify → update
`docs/HANDOVER.md` → one PR listing fixed vs. accepted.

**Q: What's the difference between a security "finding" that's a bug
and one that isn't?**

A: Not every finding is a code defect — some are ambiguities
Discovery/Design never pinned down (e.g. "was owner-only editing
actually intended?"). Those need a decision in `docs/decisions.md`, not
a fix, and resolving them comes first since other fixes may depend on
the answer.

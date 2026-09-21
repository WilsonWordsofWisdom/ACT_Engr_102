# Figma Make prompt — phase-change note & history (optional)

Optional, per `training/LAB.md` Module 2. Use this only if the lab
timing allows and the requirement benefits from a quick visual before
touching React. It accelerates the Design decision in `docs/design.md` —
it does not replace making that decision, and it does not replace
Architecture, Verify or Security.

## Copy-paste prompt for Figma Make

```
Design a small addition to an existing engagement-tracker dashboard.

Context: consultants track client engagements in a table (Client, Owner,
Phase, Last updated). Each row has a dropdown + button to change phase.

New requirement: when a consultant changes an engagement's phase, they
must also enter a short note. The engagement should then show its
phase-change history (previous phase, new phase, note, timestamp) below
or near the row.

Show me:
1. The phase-change interaction with the note field added.
2. A loading state while the change is saving.
3. An empty state for an engagement with no history yet.
4. A validation-error state for an empty note.
5. A success state confirming the note was saved.

Keep it consistent with a plain, neutral (zinc/gray) Tailwind-style
dashboard — no heavy branding.
```

## After using it

Record the resulting decision — where the note is entered, what the
history looks like, and the four states above — in `docs/design.md`
before moving to Architecture.

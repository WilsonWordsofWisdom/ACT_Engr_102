# Design: ACT Client Engagement Tracker

## Baseline (already built)

- **Style:** Tailwind utility classes, plain neutral palette (zinc), no
  design system dependency. Rounded cards, a single data table.
- **Login (`/login`):** single-field mock sign-in — pick a consultant from
  a dropdown, no password. A visible banner states this is training-only.
- **Dashboard (`/dashboard`):** one table — Client, Owner, Phase (colored
  badge), Last updated, and an inline form to change phase.
- **States implemented:**
  - Loaded (table with rows) — the only state currently built.
  - Not signed in → redirect to `/login`.
- **States NOT implemented:** loading, empty (zero engagements), and
  phase-change error states are not designed yet — the baseline table
  always has data and phase updates cannot currently fail client-side.

## Open design decision — phase-change note & history (this lab)

Fill this in during the lab's Design module, after Discovery in
`docs/PRD.md` is answered. At minimum, decide:

- Where does the consultant enter the note — inline in the phase-change
  form, or a separate step/modal?
- What does the history look like on the dashboard (inline expandable row,
  separate panel, separate page)?
- **Loading state:** what shows while the note is being saved?
- **Empty state:** what shows for an engagement with no phase-change
  history yet?
- **Validation-error state:** what shows if the note is empty or too long?
- **Success state:** how does the consultant know the note was saved?

Optional: use `design/figma-make-prompt.md` in Figma Make to explore this
interaction quickly before touching React code. It accelerates this
decision — it does not replace it.

_TODO — record the decision here once made, then reference it from
`docs/architecture.md` before implementation._

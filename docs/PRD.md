# PRD: ACT Client Engagement Tracker

**Status:** Baseline shipped and working. One open feature request below is
this lab's exercise — complete Discovery for it before any code changes.

## 1. Problem (baseline — already answered)

ACT consultants track client engagements informally, so it's hard to see at
a glance which phase each engagement is in or who owns it. The tracker
gives consultants a single dashboard listing engagements, owners and
phases.

## 2. Users (baseline)

- **Consultant** — owns one or more engagements; can view all engagements
  and change any engagement's phase.

There is currently no role separation (any signed-in consultant can edit
any engagement). That is a known baseline limitation, not a lab defect.

## 3. Critical journey (baseline)

1. Consultant signs in (mock sign-in — see `lib/auth/session.ts`).
2. Consultant views the dashboard listing all engagements.
3. Consultant changes an engagement's phase via the dropdown.
4. Dashboard reflects the new phase and updated timestamp immediately.

## 4. Success measure (baseline)

A consultant can find any engagement's current phase and change it in
under two clicks.

## 5. Non-goals (baseline)

- Role-based access control between consultants.
- Real authentication provider.
- Real client/agency data of any kind.

## 6. Data classification (baseline)

All engagement, client and consultant data is **synthetic**, generated for
training. No real client names, PII, or agency data may be added to this
repository at any point (see `docs/security-checklist.md`).

---

## 7. Open feature request — phase-change history (this lab's exercise)

**Raw request, as given to the team:**

> Add a short note whenever an engagement changes phase, retain the
> phase-change history, and surface the history on the dashboard.

This section is intentionally incomplete. Complete it during the lab's
Discovery module before writing any application code — see
`training/LAB.md` Module 2 and the Discovery prompt in
`training/PROMPTS.md`.

- **Who can add a note?**
  _TODO — confirm during Discovery._

- **What exactly counts as "history"?** (fields retained per entry — e.g.
  previous phase, new phase, note, timestamp, author?)
  _TODO — confirm during Discovery._

- **Where is history surfaced on the dashboard?**
  _TODO — confirm during Discovery._

- **Non-goals for this feature** (what must explicitly NOT change or be
  built):
  _TODO — confirm during Discovery._

- **Success measure for this feature:**
  _TODO — confirm during Discovery._

- **Data classification for this feature:**
  _TODO — confirm this stays synthetic-only; flag anything that wouldn't._

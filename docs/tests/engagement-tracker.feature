# This file is a behaviour reference read by trainees during Verify
# (training/LAB.md Module 4) — it is not wired to an automated Gherkin
# runner. The first two scenarios already pass today; run `npm run test`
# and open lib/data/engagements.test.ts and app/api/engagements/route.test.ts
# to see the automated coverage behind them. The scenarios below the
# "--- LAB TARGET ---" marker describe behaviour that does not exist yet —
# building it is this lab's feature slice.

Feature: Client engagement phase tracking

  Background:
    Given the ACT Client Engagement Tracker baseline app is running
    And all engagement, client and consultant data is synthetic

  Scenario: Unauthenticated visitor is rejected
    Given an unauthenticated visitor
    When they call GET /api/engagements
    Then the response status is 401 Unauthorized

  Scenario: Authenticated consultant changes an engagement's phase
    Given an authenticated consultant on the dashboard
    When they change an engagement's phase to "On Hold"
    Then the dashboard shows the new phase immediately
    And the engagement's "last updated" timestamp changes

  # --- LAB TARGET: not yet implemented in the baseline ---

  Scenario: Consultant records a note when changing phase
    Given an authenticated consultant on the dashboard
    When they change an engagement's phase and enter a short note
    Then the phase change is recorded with the previous phase, new phase,
      note and timestamp
    And the engagement's phase-change history shows the new entry
    And existing dashboard behaviour is otherwise unchanged

  Scenario: Empty note is rejected
    Given an authenticated consultant on the dashboard
    When they try to change phase with an empty note
    Then the change is rejected with a validation message
    And no phase-history entry is recorded

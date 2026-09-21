// DATA LAYER — synthetic training data only. Never replace with real client
// or agency information (see docs/security-checklist.md).

export type Phase = "Discovery" | "Proposal" | "Active" | "On Hold" | "Closed";

export const PHASES: readonly Phase[] = [
  "Discovery",
  "Proposal",
  "Active",
  "On Hold",
  "Closed",
];

export type Engagement = {
  id: string;
  clientName: string;
  consultantOwner: string;
  phase: Phase;
  phaseUpdatedAt: string; // ISO 8601
};

const SEED_ENGAGEMENTS: readonly Engagement[] = [
  {
    id: "eng-001",
    clientName: "Northfield Housing Authority",
    consultantOwner: "Alex Rivera",
    phase: "Active",
    phaseUpdatedAt: "2026-08-04T09:15:00.000Z",
  },
  {
    id: "eng-002",
    clientName: "Riverside Transit Commission",
    consultantOwner: "Priya Nathan",
    phase: "Discovery",
    phaseUpdatedAt: "2026-09-01T13:40:00.000Z",
  },
  {
    id: "eng-003",
    clientName: "Lakeside Municipal Council",
    consultantOwner: "Jordan Lee",
    phase: "Proposal",
    phaseUpdatedAt: "2026-08-22T10:05:00.000Z",
  },
  {
    id: "eng-004",
    clientName: "Harborview Public Health Office",
    consultantOwner: "Alex Rivera",
    phase: "On Hold",
    phaseUpdatedAt: "2026-07-30T16:20:00.000Z",
  },
  {
    id: "eng-005",
    clientName: "Cedar Ridge Licensing Bureau",
    consultantOwner: "Priya Nathan",
    phase: "Closed",
    phaseUpdatedAt: "2026-06-18T11:00:00.000Z",
  },
  {
    id: "eng-006",
    clientName: "Union County Grants Office",
    consultantOwner: "Jordan Lee",
    phase: "Active",
    phaseUpdatedAt: "2026-09-10T08:50:00.000Z",
  },
];

// Next.js dev (Turbopack) can evaluate this module more than once per
// process — once for the Route Handler bundle, once for the Server
// Component/Action bundle. A plain module-level `let` would give each
// bundle its own copy and the dashboard and API route would drift apart.
// Stashing the store on `globalThis` keeps a single shared instance across
// bundles within the same process, while still resetting to the seed
// whenever the dev server restarts (the lab's deterministic reset path —
// see training/LAB.md).
declare global {
  var __actEngagementsStore: Engagement[] | undefined;
}

function getStore(): Engagement[] {
  if (!globalThis.__actEngagementsStore) {
    globalThis.__actEngagementsStore = SEED_ENGAGEMENTS.map((e) => ({ ...e }));
  }
  return globalThis.__actEngagementsStore;
}

export function listEngagements(): Engagement[] {
  return getStore().map((e) => ({ ...e }));
}

export function getEngagementById(id: string): Engagement | undefined {
  const found = getStore().find((e) => e.id === id);
  return found ? { ...found } : undefined;
}

export function updateEngagementPhase(
  id: string,
  phase: Phase,
): Engagement | undefined {
  const target = getStore().find((e) => e.id === id);
  if (!target) return undefined;
  target.phase = phase;
  target.phaseUpdatedAt = new Date().toISOString();
  return { ...target };
}

/** Test-only: restores the in-memory store to its seeded state. */
export function resetEngagementsForTesting(): void {
  globalThis.__actEngagementsStore = SEED_ENGAGEMENTS.map((e) => ({ ...e }));
}

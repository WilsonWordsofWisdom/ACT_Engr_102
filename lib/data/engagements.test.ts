import { beforeEach, describe, expect, it } from "vitest";
import {
  getEngagementById,
  listEngagements,
  resetEngagementsForTesting,
  updateEngagementPhase,
} from "./engagements";

beforeEach(() => {
  resetEngagementsForTesting();
});

describe("listEngagements", () => {
  it("returns the seeded synthetic engagements", () => {
    const engagements = listEngagements();
    expect(engagements.length).toBeGreaterThan(0);
    for (const engagement of engagements) {
      expect(engagement.clientName).toBeTruthy();
      expect(engagement.consultantOwner).toBeTruthy();
      expect(engagement.phase).toBeTruthy();
    }
  });

  it("returns copies, not references to internal state", () => {
    const first = listEngagements();
    first[0].clientName = "Mutated";
    const second = listEngagements();
    expect(second[0].clientName).not.toBe("Mutated");
  });
});

describe("getEngagementById", () => {
  it("finds a seeded engagement", () => {
    const engagement = getEngagementById("eng-001");
    expect(engagement?.clientName).toBe("Northfield Housing Authority");
  });

  it("returns undefined for an unknown id", () => {
    expect(getEngagementById("does-not-exist")).toBeUndefined();
  });
});

describe("updateEngagementPhase", () => {
  it("updates the phase and the timestamp", () => {
    const before = getEngagementById("eng-002");
    const updated = updateEngagementPhase("eng-002", "Active");
    expect(updated?.phase).toBe("Active");
    expect(updated?.phaseUpdatedAt).not.toBe(before?.phaseUpdatedAt);
  });

  it("returns undefined for an unknown id", () => {
    expect(updateEngagementPhase("does-not-exist", "Active")).toBeUndefined();
  });
});

import { describe, expect, it } from "vitest";
import { CONSULTANTS, isConsultant } from "./session";

describe("isConsultant", () => {
  it("accepts a known consultant", () => {
    expect(isConsultant(CONSULTANTS[0])).toBe(true);
  });

  it("rejects an unknown name", () => {
    expect(isConsultant("Someone Else")).toBe(false);
  });

  it("rejects null and undefined", () => {
    expect(isConsultant(null)).toBe(false);
    expect(isConsultant(undefined)).toBe(false);
  });
});

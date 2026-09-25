import { NextRequest } from "next/server";
import { beforeEach, describe, expect, it } from "vitest";
import { resetEngagementsForTesting } from "@/lib/data/engagements";
import { GET } from "./route";

beforeEach(() => {
  resetEngagementsForTesting();
});

describe("GET /api/engagements", () => {
  it("rejects an unauthenticated request with 401", async () => {
    const request = new NextRequest("http://localhost/api/engagements");
    const response = await GET(request);
    expect(response.status).toBe(401);
  });

  it("returns engagements for an authenticated consultant", async () => {
    const request = new NextRequest("http://localhost/api/engagements", {
      headers: { cookie: "act_session=Daniel" },
    });
    const response = await GET(request);
    expect(response.status).toBe(200);
    const body = await response.json();
    expect(Array.isArray(body.engagements)).toBe(true);
    expect(body.engagements.length).toBeGreaterThan(0);
  });
});

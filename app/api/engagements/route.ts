import { NextRequest, NextResponse } from "next/server";
import { SESSION_COOKIE, isConsultant } from "@/lib/auth/session";
import { listEngagements } from "@/lib/data/engagements";

export async function GET(request: NextRequest) {
  const consultant = request.cookies.get(SESSION_COOKIE)?.value;
  if (!isConsultant(consultant)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ engagements: listEngagements() });
}

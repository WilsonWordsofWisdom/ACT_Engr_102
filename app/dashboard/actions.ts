"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getCurrentConsultant, SESSION_COOKIE } from "@/lib/auth/session";
import { PHASES, updateEngagementPhase, type Phase } from "@/lib/data/engagements";

// CONTROLLER LAYER — business logic between the dashboard View and the
// Data layer. Note: this intentionally does NOT record a note or retain
// phase-change history yet. Adding that is the lab's bounded feature.
export async function changePhase(
  engagementId: string,
  formData: FormData,
): Promise<void> {
  const consultant = await getCurrentConsultant();
  if (!consultant) {
    redirect("/login");
  }

  const phase = formData.get("phase");
  if (typeof phase !== "string" || !PHASES.includes(phase as Phase)) {
    throw new Error("Invalid phase value.");
  }

  updateEngagementPhase(engagementId, phase as Phase);
  revalidatePath("/dashboard");
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.delete(SESSION_COOKIE);
  redirect("/login");
}

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { SESSION_COOKIE, isConsultant } from "@/lib/auth/session";

export async function loginAs(formData: FormData): Promise<void> {
  const name = formData.get("consultant");
  if (typeof name !== "string" || !isConsultant(name)) {
    throw new Error("Unknown consultant selection.");
  }
  const store = await cookies();
  store.set(SESSION_COOKIE, name, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
  redirect("/dashboard");
}

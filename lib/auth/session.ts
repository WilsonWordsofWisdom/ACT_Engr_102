// Mock session layer for the training lab. This is NOT a real auth system —
// it exists so the lab can exercise "authenticated vs unauthenticated"
// behaviour without requiring trainees to configure a real identity
// provider. Do not use this pattern outside the lab.
import { cookies } from "next/headers";

export const SESSION_COOKIE = "act_session";

export const CONSULTANTS = ["Alex Rivera", "Priya Nathan", "Jordan Lee"] as const;
export type Consultant = (typeof CONSULTANTS)[number];

export function isConsultant(
  value: string | undefined | null,
): value is Consultant {
  return !!value && (CONSULTANTS as readonly string[]).includes(value);
}

/** Server Components / Server Actions only — reads the mock session cookie. */
export async function getCurrentConsultant(): Promise<Consultant | null> {
  const store = await cookies();
  const value = store.get(SESSION_COOKIE)?.value;
  return isConsultant(value) ? value : null;
}

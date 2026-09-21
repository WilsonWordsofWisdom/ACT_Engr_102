import Link from "next/link";
import { getCurrentConsultant } from "@/lib/auth/session";

export default async function Home() {
  const consultant = await getCurrentConsultant();

  return (
    <main className="mx-auto flex max-w-2xl flex-1 flex-col justify-center px-6 py-16">
      <h1 className="text-3xl font-semibold text-zinc-900">
        ACT Client Engagement Tracker
      </h1>
      <p className="mt-3 text-zinc-600">
        A prepared baseline app for ACT Engineering 102. Consultants track
        client engagements and their phase. This lab adds one bounded
        feature — a phase-change note with history — through the full
        ClaudeThisIsTheWay lifecycle.
      </p>
      <Link
        href={consultant ? "/dashboard" : "/login"}
        className="mt-6 inline-flex w-fit items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
      >
        {consultant ? "Go to dashboard" : "Sign in"}
      </Link>
      <p className="mt-8 text-xs text-zinc-500">
        Start with <code>training/LAB.md</code> for the lab instructions.
      </p>
    </main>
  );
}

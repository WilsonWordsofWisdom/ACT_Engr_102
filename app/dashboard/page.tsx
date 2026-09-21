import { redirect } from "next/navigation";
import { getCurrentConsultant } from "@/lib/auth/session";
import { listEngagements, PHASES } from "@/lib/data/engagements";
import { PhaseBadge } from "@/components/PhaseBadge";
import { changePhase, logout } from "./actions";

export default async function DashboardPage() {
  const consultant = await getCurrentConsultant();
  if (!consultant) {
    redirect("/login");
  }

  const engagements = listEngagements();

  return (
    <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col px-6 py-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-zinc-900">
            Client Engagements
          </h1>
          <p className="mt-1 text-sm text-zinc-600">
            Signed in as <span className="font-medium">{consultant}</span>
          </p>
        </div>
        <form action={logout}>
          <button
            type="submit"
            className="rounded-md border border-zinc-300 px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-50"
          >
            Switch consultant
          </button>
        </form>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-zinc-200">
        <table className="w-full text-left text-sm">
          <thead className="bg-zinc-50 text-xs uppercase tracking-wide text-zinc-500">
            <tr>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Owner</th>
              <th className="px-4 py-3">Phase</th>
              <th className="px-4 py-3">Last updated</th>
              <th className="px-4 py-3">Change phase</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-100">
            {engagements.map((engagement) => (
              <tr key={engagement.id}>
                <td className="px-4 py-3 font-medium text-zinc-900">
                  {engagement.clientName}
                </td>
                <td className="px-4 py-3 text-zinc-600">
                  {engagement.consultantOwner}
                </td>
                <td className="px-4 py-3">
                  <PhaseBadge phase={engagement.phase} />
                </td>
                <td className="px-4 py-3 text-zinc-600">
                  {new Date(engagement.phaseUpdatedAt).toLocaleString()}
                </td>
                <td className="px-4 py-3">
                  <form
                    action={changePhase.bind(null, engagement.id)}
                    className="flex items-center gap-2"
                  >
                    <select
                      name="phase"
                      defaultValue={engagement.phase}
                      className="rounded-md border border-zinc-300 px-2 py-1 text-sm"
                    >
                      {PHASES.map((phase) => (
                        <option key={phase} value={phase}>
                          {phase}
                        </option>
                      ))}
                    </select>
                    <button
                      type="submit"
                      className="rounded-md bg-zinc-900 px-2.5 py-1 text-xs font-medium text-white hover:bg-zinc-700"
                    >
                      Update
                    </button>
                  </form>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-zinc-500">
        This baseline changes a phase but does not yet record a note or keep
        phase-change history — that is the lab&apos;s feature slice. See{" "}
        <code>docs/PRD.md</code> for the full requirement.
      </p>
    </main>
  );
}

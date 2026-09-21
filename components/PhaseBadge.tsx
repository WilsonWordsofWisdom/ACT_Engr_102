import type { Phase } from "@/lib/data/engagements";

const PHASE_STYLES: Record<Phase, string> = {
  Discovery: "bg-blue-100 text-blue-800",
  Proposal: "bg-purple-100 text-purple-800",
  Active: "bg-green-100 text-green-800",
  "On Hold": "bg-amber-100 text-amber-800",
  Closed: "bg-zinc-200 text-zinc-700",
};

export function PhaseBadge({ phase }: { phase: Phase }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${PHASE_STYLES[phase]}`}
    >
      {phase}
    </span>
  );
}

import { CONSULTANTS } from "@/lib/auth/session";
import { loginAs } from "./actions";

export default function LoginPage() {
  return (
    <main className="mx-auto flex max-w-sm flex-1 flex-col justify-center px-6 py-16">
      <h1 className="text-2xl font-semibold text-zinc-900">
        ACT Engagement Tracker
      </h1>
      <p className="mt-2 text-sm text-zinc-600">
        Mock sign-in for training only. Pick which consultant you are acting
        as — this is not a real identity provider.
      </p>
      <form action={loginAs} className="mt-6 flex flex-col gap-4">
        <label className="flex flex-col gap-1 text-sm font-medium text-zinc-700">
          Consultant
          <select
            name="consultant"
            defaultValue={CONSULTANTS[0]}
            className="rounded-md border border-zinc-300 px-3 py-2 text-sm"
          >
            {CONSULTANTS.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-700"
        >
          Continue
        </button>
      </form>
    </main>
  );
}

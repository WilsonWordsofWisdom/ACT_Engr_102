# ACT Client Engagement Tracker — ACT Engineering 102 lab

Lab starter repo for **ACT Engineering 102: Vibe Engineering for
Forward-Deployed Engineers**. A working Next.js baseline with synthetic
data — the lab exercises the full ClaudeThisIsTheWay lifecycle on one
bounded feature.

**Start here:** [`training/LAB.md`](training/LAB.md)

## Quickstart

```bash
npm install
npm run dev
```

Open the printed local URL and sign in as any consultant (mock sign-in,
no password — this is a training-only stand-in for real auth).

## Verify

```bash
npm run verify   # lint + typecheck + test
```

## Repo map

| Path | What it is |
|---|---|
| `app/`, `lib/`, `components/` | The application — View (`app/**/page.tsx`), Controller (`app/**/actions.ts`, `app/api/**/route.ts`), Data (`lib/data/`) |
| `docs/` | Living lifecycle artefacts — PRD, design, architecture, decisions, tests, security checklist, handover |
| `design/` | Optional Figma Make prompt for rapid UI exploration |
| `deploy/rabbitdeploy/` | Context on the real ACT delivery path — not configured here |
| `training/` | Lab instructions and copy-paste prompt pack |
| `CLAUDE.md` | The lab's guardrail — read this before doing anything else |

## Reset

The engagement data is an in-memory synthetic store — restart the dev
server (`npm run dev`) to reset it to the seed state.

## Boundary

This produces a working **prototype**, not a production system.
Productionisation is owned by engineering/platform teams — see
[`deploy/rabbitdeploy/README.md`](deploy/rabbitdeploy/README.md) and
[`docs/HANDOVER.md`](docs/HANDOVER.md).

# Deployment path (context only — not configured in this repo)

The real ACT prototype delivery path is:

```
Claude Code → GitHub → RabbitDeploy → GCC (AWS)
```

This lab does not configure that pipeline. There is intentionally no
RabbitDeploy YAML or project-specific deployment configuration in this
repository — the deployment contract is owned by the platform team, not
by individual project repos or training material. Hard-coding a specific
pipeline here would go stale and could be copied into real client repos
incorrectly.

## What this lab actually covers

The lab proves the engineering loop (Discovery → Design → Architecture →
Build → Verify → Harden) on this prepared repo, running locally. It does
not deploy anywhere.

## Where productionisation actually happens

Productionisation, operationalisation, formal security/production
approval, and real agency-data integration are owned by the relevant
engineering/platform/security teams — not by this training repository.
See `docs/HANDOVER.md` for the prototype-to-production boundary this repo
observes.

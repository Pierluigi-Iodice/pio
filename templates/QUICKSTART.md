# PIO Quick Start — Up and Running in 5 Minutes

## Step 1 — Install PIO into your project

```bash
npx pio-installer@latest
```

PIO creates `./pio/`, `.claude/commands/pio/` (Claude Code slash commands), `.codex/skills/pio-*/` (Codex prompts), and merges context into `CLAUDE.md`, `CODEX.md`, `GEMINI.md`, and `AGENTS.md`.

## Step 2 — Assign roles

Edit the Role Assignment section in `pio/STATUS.md`:

| Role | Agent |
|---|---|
| Planner | Claude Code |
| Coder | Claude Code |
| Reviewer | Codex |
| Tester | Codex |

## Step 3 — Open your AI clients on the same directory

| Client | How to invoke PIO |
|--------|-------------------|
| **Claude Code** | `/pio:status`, `/pio:plan`, `/pio:develop`, etc. |
| **Codex** | `/prompts:pio-status`, `/prompts:pio-plan`, etc. |
| **Gemini CLI** | See `GEMINI.md` for available workflow instructions |

> **Important:** Claude Code uses native slash commands (`/pio:*`).
> Codex uses native prompts (`/prompts:pio-*`). These are different invocation mechanisms — both work automatically after install.

## Step 4 — Check status

- Claude Code: `/pio:status`
- Codex: `/prompts:pio-status`

You should see: `Phase: IDLE — Run /pio:plan (or /prompts:pio-plan) to start`

## Step 5 — Start planning

In Claude Code (Planner): `/pio:plan`
Describe the feature. Discuss. Agent writes `pio/handoff/plan.md`.

## Step 6 — Get the review

Switch to Codex (Reviewer): `/prompts:pio-review`
Agent reads plan, shows analysis on screen. Discuss. Then: `/prompts:pio-accept`

## Step 7 — Apply the review

Back in Claude Code: `/pio:applyreview`
Agent reads review, updates plan, flags anything needing your decision.

## Step 8 — Green light planning

When both agree the plan is solid:
- Claude Code: `/pio:greenlight`
- Codex: `/prompts:pio-greenlight`

Both green lights → proceed to development.

## Step 9 — Develop → Review → Fix → Test

```
Claude Code:  /pio:develop          → Coder implements, writes dev_log.md
Codex:        /prompts:pio-reviewcode → Reviewer audits (shows on screen)
Codex:        /prompts:pio-accept    → Review saved
Claude Code:  /pio:fix              → Coder fixes
Both:         /pio:greenlight / /prompts:pio-greenlight → Development approved

Codex:        /prompts:pio-testplan  → Tester defines tests (shows on screen)
Codex:        /prompts:pio-accept    → Test plan saved
Codex:        /prompts:pio-runtest   → Tests executed
Codex:        /prompts:pio-reviewtest → Results reviewed (shows on screen)
Codex:        /prompts:pio-accept    → Test review saved
Claude Code:  /pio:bugfix           → Bugs fixed
Both:         /pio:greenlight / /prompts:pio-greenlight → QA approved → DONE
```

## Step 10 — Archive

- Claude Code: `/pio:archive`
- Codex: `/prompts:pio-archive`

Moves all handoff files to `pio/archive/[date-feature]/`, resets STATUS.md.

## Tips

- **You are the PM.** Nothing happens without your command.
- **Read STATUS.md** any time you're unsure where you are — use `/pio:status` or `/prompts:pio-status`.
- **Skip phases** for small tasks — go straight to `/pio:develop` (the agent will ask you to describe the task inline if no `plan.md` exists) + `/pio:reviewcode`.
- **CODEX.md is context, not a command registry.** Codex reads it for role and protocol context, but actual command invocation is via `/prompts:pio-*` backed by `.codex/skills/pio-*/SKILL.md`.
- **Fragments** — run `/pio:develop` (or `/prompts:pio-develop`) once per implementation step for large plans.

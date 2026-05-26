# PIO Quick Start — Up and Running in 5 Minutes

## Step 1 — Install PIO into your project

```bash
npx pio-installer@latest
```

That's it. PIO creates `./pio/` and merges `/pio:*` commands into `CLAUDE.md`, `CODEX.md`, and `GEMINI.md`.

## Step 2 — Assign roles

Edit the Role Assignment section in `pio/STATUS.md`:

| Role | Agent |
|---|---|
| Planner | Claude Code |
| Coder | Claude Code |
| Reviewer | Codex |
| Tester | Codex |

## Step 3 — Open your AI clients on the same directory

Claude Code, Codex, and Gemini CLI all auto-read their config files and know the `/pio:*` commands.

## Step 4 — Check status

In any client: `/pio:status`
You should see: `Phase: PLANNING — Awaiting /pio:plan`

## Step 5 — Start planning

In Claude Code (Planner): `/pio:plan`
Describe the feature. Discuss. Agent writes `pio/handoff/plan.md`.

## Step 6 — Get the review

Switch to Codex (Reviewer): `/pio:review`
Agent reads plan, shows analysis on screen. Discuss. Then: `/pio:accept`

## Step 7 — Apply the review

Back in Claude Code: `/pio:applyreview`
Agent reads review, updates plan, flags anything needing your decision.

## Step 8 — Green light planning

When both agree the plan is solid:
- Claude Code: `/pio:greenlight`
- Codex: `/pio:greenlight`
Both green lights → proceed to development.

## Step 9 — Develop → Review → Fix → Test

```
/pio:develop      → Coder implements
/pio:reviewcode   → Reviewer audits (Codex)
/pio:accept       → Review saved
/pio:fix          → Coder fixes
/pio:greenlight   → Both approve

/pio:testplan     → Tester defines tests (Codex)
/pio:accept       → Test plan saved
/pio:runtest      → Tests executed
/pio:reviewtest   → Results reviewed
/pio:bugfix       → Bugs fixed
/pio:greenlight   → Both approve → DONE
```

## Step 10 — Archive

`/pio:archive` → moves all handoff files to `pio/archive/[date-feature]/`, resets STATUS.md.

## Tips

- **You are the PM.** Nothing happens without your command.
- **Read STATUS.md** any time you're unsure where you are.
- **Skip phases** for small tasks — go straight to `/pio:develop` (the agent will ask you to describe the task inline if no `plan.md` exists) + `/pio:reviewcode`.
- **Fragments** — run `/pio:develop` once per implementation step for large plans.

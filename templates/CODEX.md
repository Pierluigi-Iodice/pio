<!-- PIO START -->
# PIO — Project Integration Orchestration
# Codex Configuration

This project uses the PIO multi-agent workflow protocol.
Read `pio/STATUS.md` at the start of every session to understand the current state.

## Your Assigned Roles
Default: Reviewer (Phases 1, 2, 3) and Tester (Phase 3).
Check `pio/STATUS.md` → Role Assignment.

## How to Invoke PIO Commands in Codex

PIO workflows are available as native Codex prompts. Use the `/prompts:` namespace:

```
/prompts:pio-status
/prompts:pio-plan
/prompts:pio-review
/prompts:pio-accept
/prompts:pio-applyreview
/prompts:pio-greenlight
/prompts:pio-develop
/prompts:pio-reviewcode
/prompts:pio-fix
/prompts:pio-testplan
/prompts:pio-runtest
/prompts:pio-reviewtest
/prompts:pio-bugfix
/prompts:pio-archive
```

Each prompt is defined in `.codex/skills/pio-<name>/SKILL.md`. When the user invokes `/prompts:pio-*`, execute the corresponding workflow from that file.

## PIO Protocol Summary

When a PIO workflow is invoked:
1. Always read `pio/STATUS.md` first to understand the current state.
2. Follow the steps defined in the corresponding `.codex/skills/pio-<name>/SKILL.md`.
3. The canonical session files live in `pio/handoff/` — read and write them as directed.
4. Role definitions are in `pio/roles/` — load the relevant role file before acting.
5. Never perform a handoff action autonomously — always report what you did and what the user should do next.

## Source of Truth
- `pio/STATUS.md` — current phase, step, green lights, role assignments
- `pio/handoff/` — active session artifacts (plan, reviews, logs, test files)
- `pio/roles/` — role-specific behavior for Planner, Coder, Reviewer, Tester
<!-- PIO END -->

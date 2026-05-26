# How PIO Works

## Core Concept: Shared Files, Isolated Contexts

Two AI agents reading the same file without sharing a conversation context produce genuinely different analyses.

Claude Code and Codex don't share memory. When Codex reads `plan.md`, it has no idea what you and Claude discussed when writing it. It brings a fresh perspective — no anchoring bias, no "I wrote this so it must be correct" effect.

This is why code review works in human teams. The reviewer didn't write the code.

---

## The Three Phases

```
PHASE 1 — PLANNING
  Planner writes plan.md
  Reviewer critiques → review_plan.md
  Planner applies → plan.md updated
  loop until both /pio:greenlight

PHASE 2 — DEVELOPMENT
  Coder implements → dev_log.md
  Reviewer audits → review_code.md
  Coder fixes → dev_log.md updated
  loop until both /pio:greenlight

PHASE 3 — QA & TESTING
  Tester defines → test_plan.md
  Coder/Tester runs → test_results.md
  Reviewer classifies → test_review.md
  Coder fixes → re-run tests
  loop until both /pio:greenlight
```

---

## The PM is Always in Control

Every handoff requires your explicit command. Nothing happens automatically.

```
/pio:review     shows analysis ON SCREEN → you discuss it
/pio:accept     only then writes the file
/pio:greenlight you decide when a phase is done
```

If you don't like what the agent shows, don't run `/pio:accept`. Discuss, iterate, then accept.

---

## Why It Catches More Bugs

**Fresh context:** The Reviewer has no memory of the planning conversation. It reads artifacts cold.

**Role specialization:** The Reviewer is explicitly instructed to be skeptical and find problems — not be helpful about the feature.

**Iterative convergence:** The loop continues until both agents agree. You can't green-light with one vote.

---

## The STATUS.md File

Your control panel. Always current. Shows:
- Active phase and step
- Role assignments
- Pending action (who should act next)
- Green light checklist
- Session log

---

## Adapting PIO

Edit the `roles/` files to match your project context:
- `roles/reviewer.md` — add project-specific patterns to check, anti-patterns to flag
- `roles/tester.md` — add your testing framework and coverage requirements
- `roles/coder.md` — add coding standards, preferred libraries

## Adding a New Agent

`GEMINI.md` is installed out of the box. To use it, assign Gemini a role in `pio/STATUS.md`.

For other CLI tools, copy any existing agent file, rename it (e.g. `CURSOR.md`), and update `## Your Assigned Roles`. The protocol is identical for any agent.

The more context you put in role files, the more relevant the output.

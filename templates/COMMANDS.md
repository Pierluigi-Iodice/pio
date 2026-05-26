# PIO Commands Reference

## Client Invocation

| Client | Syntax | Example |
|--------|--------|---------|
| **Claude Code** | `/pio:<command>` | `/pio:plan` |
| **Codex** | `/prompts:pio-<command>` | `/prompts:pio-plan` |
| **Gemini CLI** | See `GEMINI.md` | Manual workflow |

Claude Code commands are backed by `.claude/commands/pio/*.md`.
Codex commands are backed by `.codex/skills/pio-*/SKILL.md`.
Both are installed automatically by `npx pio-installer@latest`.

---

## Universal Commands

### `status`
Any agent, any phase. Reads `pio/STATUS.md` and reports current state, pending action, green light status, next recommended command.
- Claude Code: `/pio:status`
- Codex: `/prompts:pio-status`

### `accept`
The agent that just showed analysis on screen. Reads current step from `STATUS.md` and saves to:
- plan review shown   → `pio/handoff/review_plan.md`
- code review shown   → `pio/handoff/review_code.md`
- test plan shown     → `pio/handoff/test_plan.md`
- test review shown   → `pio/handoff/test_review.md`
- Claude Code: `/pio:accept`
- Codex: `/prompts:pio-accept`

### `greenlight`
Any agent. Appends approval to `pio/handoff/greenlight.md`. Both agents must green-light before phase is complete.
- Claude Code: `/pio:greenlight`
- Codex: `/prompts:pio-greenlight`

### `archive`
Any agent. Moves session files (`plan.md`, `review_plan.md`, `dev_log.md`, `review_code.md`, `test_plan.md`, `test_results.md`, `test_review.md`, `greenlight.md`) to `pio/archive/[YYYY-MM-DD_feature]/`. Keeps `README.md` and `*.template` files in place. Resets STATUS.md.
- Claude Code: `/pio:archive`
- Codex: `/prompts:pio-archive`

---

## Phase 1 — Planning

### `plan` — Planner
Discuss feature with PM → write `pio/handoff/plan.md`.
- Claude Code: `/pio:plan` | Codex: `/prompts:pio-plan`

### `review` — Reviewer
Read `plan.md` → show analysis on screen → wait for `accept`.
Output: Summary / Critical Issues / Minor Issues / Open Questions / Recommendation.
- Claude Code: `/pio:review` | Codex: `/prompts:pio-review`

### `applyreview` — Planner
Read `review_plan.md` → apply fixes → update `plan.md` (increment version) → flag open items to PM.
- Claude Code: `/pio:applyreview` | Codex: `/prompts:pio-applyreview`

---

## Phase 2 — Development

### `develop` — Coder
Read `plan.md` if it exists, otherwise ask PM for inline task description → implement → write `pio/handoff/dev_log.md`.
- Claude Code: `/pio:develop` | Codex: `/prompts:pio-develop`

### `reviewcode` — Reviewer
Read `dev_log.md` + changed files → show analysis on screen → wait for `accept`.
Checks: bugs, regressions, pattern violations, missing error handling, plan deviations.
- Claude Code: `/pio:reviewcode` | Codex: `/prompts:pio-reviewcode`

### `fix` — Coder
Read `review_code.md` → apply fixes → append Fix Log to `dev_log.md`.
- Claude Code: `/pio:fix` | Codex: `/prompts:pio-fix`

---

## Phase 3 — QA & Testing

### `testplan` — Tester
Read `plan.md` + `dev_log.md` → generate test scenarios → show on screen → wait for `accept`.
Covers: happy path, edge cases, error states, regressions.
- Claude Code: `/pio:testplan` | Codex: `/prompts:pio-testplan`

### `runtest` — Coder or Tester
Read `test_plan.md` → execute tests → write `pio/handoff/test_results.md`.
- Claude Code: `/pio:runtest` | Codex: `/prompts:pio-runtest`

### `reviewtest` — Reviewer
Read `test_results.md` → classify ✅ PASS / ❌ FAIL / ⚠️ REGRESSION → show on screen → wait for `accept`.
- Claude Code: `/pio:reviewtest` | Codex: `/prompts:pio-reviewtest`

### `bugfix` — Coder
Read `test_review.md` → fix all FAIL and REGRESSION (regressions first) → append fix log to `dev_log.md`.
- Claude Code: `/pio:bugfix` | Codex: `/prompts:pio-bugfix`

---

## Handoff File Formats

### plan.md
```
# Plan — [feature]
Author / Date / Version
## Objective / ## Scope / ## Architecture / ## Implementation Steps
## Files Affected / ## Risks & Unknowns / ## Definition of Done
```

### dev_log.md
```
# Dev Log — [feature]
Author / Date / Plan version / Fragment
## What Was Done / ## Files Changed / ## Patterns Used
## Deviations from Plan / ## Known Limitations / ## Notes for Reviewer
## Fix Log (appended per fix cycle)
```

### review files (review_plan.md, review_code.md, test_review.md)
```
## Review Summary
## Critical Issues (numbered — issue / why / fix)
## Minor Issues (numbered)
## Open Questions (numbered)
## Recommendation: PROCEED WITH CHANGES | REWORK REQUIRED | GREEN LIGHT
```

### test_plan.md
```
# Test Plan — [feature]
## Test Scenarios (TC-001, TC-002... with Type / Input / Expected / Risk)
## Regression Areas / ## Edge Cases
```

### test_results.md
```
# Test Results
Results table: TC / Name / PASS / FAIL / REGRESSION / Risk / Notes
## Failure Details (per failed TC)
```

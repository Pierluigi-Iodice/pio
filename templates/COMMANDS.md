# PIO Commands Reference

All commands follow the pattern `/pio:<command>`. Defined in `CLAUDE.md`, `CODEX.md`, and `GEMINI.md`. All commands are present in all agent files — role assignment in `pio/STATUS.md` determines who runs what by default.

---

## Universal Commands

### `/pio:status`
Any agent, any phase. Reads `pio/STATUS.md` and reports current state, pending action, green light status.

### `/pio:accept`
The agent that just showed analysis on screen. Reads current step from `STATUS.md` and saves to:
- plan review shown   → `pio/handoff/review_plan.md`
- code review shown   → `pio/handoff/review_code.md`
- test plan shown     → `pio/handoff/test_plan.md`
- test review shown   → `pio/handoff/test_review.md`

### `/pio:greenlight`
Any agent. Appends approval to `pio/handoff/greenlight.md`. Both agents must green-light before phase is complete.

### `/pio:archive`
Any agent. Moves session files (`plan.md`, `review_plan.md`, `dev_log.md`, `review_code.md`, `test_plan.md`, `test_results.md`, `test_review.md`, `greenlight.md`) to `pio/archive/[YYYY-MM-DD_feature]/`. Keeps `README.md` and `*.template` files in place. Resets STATUS.md.

---

## Phase 1 — Planning

### `/pio:plan` — Planner
Discuss feature with PM → write `pio/handoff/plan.md`.

### `/pio:review` — Reviewer
Read `plan.md` → show analysis on screen → wait for `/pio:accept`.
Output format: Summary / Critical Issues / Minor Issues / Open Questions / Recommendation.

### `/pio:applyreview` — Planner
Read `review_plan.md` → apply fixes → update `plan.md` (increment version) → flag open items to PM.

---

## Phase 2 — Development

### `/pio:develop` — Coder
Read `plan.md` if it exists, otherwise ask PM for inline task description → implement → write `pio/handoff/dev_log.md`.

### `/pio:reviewcode` — Reviewer
Read `dev_log.md` + changed files → show analysis on screen → wait for `/pio:accept`.
Look for: bugs, regressions, pattern violations, missing error handling, plan deviations.

### `/pio:fix` — Coder
Read `review_code.md` → apply fixes → append Fix Log to `dev_log.md`.

---

## Phase 3 — QA & Testing

### `/pio:testplan` — Tester
Read `plan.md` + `dev_log.md` → generate test scenarios → show on screen → wait for `/pio:accept`.
Covers: happy path, edge cases, error states, regressions.

### `/pio:runtest` — Coder or Tester
Read `test_plan.md` → execute tests → write `pio/handoff/test_results.md`.

### `/pio:reviewtest` — Reviewer
Read `test_results.md` → classify PASS/FAIL/REGRESSION → show on screen → wait for `/pio:accept`.

### `/pio:bugfix` — Coder
Read `test_review.md` → fix all FAIL and REGRESSION → append fix log to `dev_log.md`.

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

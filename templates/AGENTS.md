<!-- PIO START -->
# PIO — Project Integration Orchestration
# Codex Agent Instructions

This project uses the PIO multi-agent workflow protocol.
Read `pio/STATUS.md` at the start of every session to understand the current state.

## PIO Workflow Invocation

PIO workflows are invoked through the `/prompts:pio-*` namespace:

- `/prompts:pio-status` — report current phase, step, pending action, next command
- `/prompts:pio-plan` — (Planner) discuss task and write `pio/handoff/plan.md`
- `/prompts:pio-review` — (Reviewer) review plan, show analysis on screen
- `/prompts:pio-accept` — save last on-screen review to the correct handoff file
- `/prompts:pio-applyreview` — (Planner) apply review feedback to plan.md
- `/prompts:pio-greenlight` — record phase approval
- `/prompts:pio-develop` — (Coder) implement feature, write dev_log.md
- `/prompts:pio-reviewcode` — (Reviewer) audit implementation, show analysis on screen
- `/prompts:pio-fix` — (Coder) apply code review fixes
- `/prompts:pio-testplan` — (Tester) generate test scenarios, show on screen
- `/prompts:pio-runtest` — (Tester) execute tests, write test_results.md
- `/prompts:pio-reviewtest` — (Reviewer) classify test results, show on screen
- `/prompts:pio-bugfix` — (Coder) fix test failures and regressions
- `/prompts:pio-archive` — archive session, reset for next feature

## Behavioral Rules

When any `/prompts:pio-*` workflow is invoked:
1. Read `pio/STATUS.md` — it is the source of truth for current state.
2. Load the relevant role file from `pio/roles/` before acting.
3. Read and write only the handoff files specified by the workflow.
4. Never act autonomously on the next step — report what was done and what the user should do next.
5. For "show on screen" steps (review, testplan, reviewtest): display the analysis but do not write to disk. Wait for `/prompts:pio-accept`.

## File Locations

| Path | Purpose |
|------|---------|
| `pio/STATUS.md` | Current phase, step, green lights, role assignments |
| `pio/handoff/plan.md` | Feature plan (written by Planner) |
| `pio/handoff/review_plan.md` | Plan review (written via accept after pio-review) |
| `pio/handoff/dev_log.md` | Implementation log (written by Coder) |
| `pio/handoff/review_code.md` | Code review (written via accept after pio-reviewcode) |
| `pio/handoff/test_plan.md` | Test scenarios (written via accept after pio-testplan) |
| `pio/handoff/test_results.md` | Test execution results (written by Tester) |
| `pio/handoff/test_review.md` | Test review (written via accept after pio-reviewtest) |
| `pio/handoff/greenlight.md` | Phase approvals (appended by each agent) |
| `pio/roles/` | Planner, Coder, Reviewer, Tester role definitions |
| `.codex/skills/pio-*/SKILL.md` | Full workflow definitions for each command |
<!-- PIO END -->

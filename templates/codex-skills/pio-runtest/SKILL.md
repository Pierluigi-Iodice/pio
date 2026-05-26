---
name: "pio-runtest"
description: "Execute test_plan.md and write test_results.md"
metadata:
  short-description: "Run all test scenarios and write test_results.md"
---

<objective>
Act as the Tester. Execute all scenarios in test_plan.md and write test_results.md.
</objective>

<process>
1. Read `pio/handoff/test_plan.md`. If missing: stop and tell user to run `/prompts:pio-testplan` + `/prompts:pio-accept` first.
2. Execute each scenario. Record: name, steps, actual result, PASS/FAIL/BLOCKED.
3. Write `pio/handoff/test_results.md` (use template).
4. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `test_results.md written — awaiting /prompts:pio-reviewtest` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Tester** ([agent]): /prompts:pio-runtest — wrote test_results.md. Pass: X, Fail: X, Blocked: X`
5. Tell the user: "Tests complete. Switch to Reviewer and run `/prompts:pio-reviewtest`"
</process>

<constraints>
- Only update Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

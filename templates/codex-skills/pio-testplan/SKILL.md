---
name: "pio-testplan"
description: "Generate a test plan for the implemented feature and show it on screen"
metadata:
  short-description: "Generate test scenarios from plan.md + dev_log.md — show on screen, do not write yet"
---

<objective>
Act as the Tester. Read the plan and development log, generate a comprehensive test plan covering all scenarios, and show it on screen. Do not write to disk until the user runs /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/tester.md` — load your Tester role definition.
2. Read `pio/handoff/plan.md` (for requirements and acceptance criteria).
3. Read `pio/handoff/dev_log.md` (for what was implemented and which files changed).
4. Generate a test plan covering:
   - Happy path scenarios (expected normal usage)
   - Edge cases (boundary conditions, unusual inputs)
   - Error states (invalid inputs, missing data, network failures)
   - Regression checks (things that might have broken due to this change)
5. **Show the test plan on screen — do NOT write any file yet.**
6. Update `pio/STATUS.md` step: "test plan shown — awaiting /prompts:pio-accept"
7. Tell the user: "Test plan ready. Review it, then run `/prompts:pio-accept` to save `test_plan.md`."
</process>

<constraints>
- Do NOT write test_plan.md at this stage.
- Only update the step field in pio/STATUS.md.
- Include at least one regression check for each file changed in the dev_log.
</constraints>

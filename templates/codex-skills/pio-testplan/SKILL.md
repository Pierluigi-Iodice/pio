---
name: "pio-testplan"
description: "Generate test scenarios and show on screen — do not write yet"
metadata:
  short-description: "Generate test plan from plan.md + dev_log.md — show on screen"
---

<objective>
Act as the Tester. Generate a test plan and show it on screen. Do not write until /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/tester.md`
2. Read `pio/handoff/plan.md` and `pio/handoff/dev_log.md`
3. Generate: happy path, edge cases, error states, regression checks
4. **Show on screen — do NOT write yet**
5. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `test plan shown — awaiting /prompts:pio-accept` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Tester** ([agent]): /prompts:pio-testplan — test plan shown. [X] scenarios`
6. Tell the user: "Test plan ready. Review it, then run `/prompts:pio-accept`."
</process>

<constraints>
- Do NOT write test_plan.md at this stage.
- Only update Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

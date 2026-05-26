---
name: "pio-bugfix"
description: "Fix test failures and regressions identified in the test review"
metadata:
  short-description: "Apply pio/handoff/test_review.md to fix FAIL and REGRESSION items"
---

<objective>
Act as the Coder. Read the test review, fix all FAIL and REGRESSION items (regressions first), and append a bug fix log to dev_log.md.
</objective>

<process>
1. Read `pio/handoff/test_review.md`
   - If missing: tell the user "No test review found. Have the Reviewer run `/prompts:pio-reviewtest` and then `/prompts:pio-accept` first." Stop.
2. Fix all **REGRESSION** items first — these are the highest priority.
3. Fix all **FAIL** items.
4. Append a "Bug Fix Log" section to `pio/handoff/dev_log.md`:
   - Each item fixed: what was wrong and what was changed in the code
   - Any item that could not be fixed and why (escalate to PM)
5. Update `pio/STATUS.md`:
   - step = "bug fixes applied — re-run /prompts:pio-runtest to verify"
6. Tell the user: "Bug fixes applied. Re-run `/prompts:pio-runtest` to verify all scenarios pass."
</process>

<constraints>
- Regressions must be fixed before FAIL items.
- Always append to dev_log.md — never overwrite existing log content.
- Do not close the QA loop — the Tester must re-run tests to confirm.
</constraints>

---
name: "pio-reviewtest"
description: "Classify test results as PASS/FAIL/REGRESSION and show on screen"
metadata:
  short-description: "Review test_results.md — show classification on screen, do not write yet"
---

<objective>
Act as the Reviewer. Classify test results and show the analysis on screen. Do not write until /prompts:pio-accept.
</objective>

<process>
1. Read `pio/handoff/test_results.md`. If missing: stop.
2. Classify each: PASS / FAIL / REGRESSION (regressions = highest priority).
3. **Show on screen — do NOT write yet.**

   Format:
   ```
   ## Test Review Summary — Total: X / Pass: X / Fail: X / Regression: X
   ## Results Table
   ## Failures & Regressions
   ## Recommendation: READY TO SHIP / FIX REQUIRED
   ```

4. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `test review shown — awaiting /prompts:pio-accept` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent]): /prompts:pio-reviewtest — Pass: X, Fail: X, Regression: X. Recommendation: [result]`
5. Tell the user: "Test review complete. Discuss, then run `/prompts:pio-accept`."
</process>

<constraints>
- Do NOT write test_review_v*.md at this stage.
- Only update Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

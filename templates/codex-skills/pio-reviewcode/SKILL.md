---
name: "pio-reviewcode"
description: "Audit implementation against plan.md and dev_log.md — show analysis on screen"
metadata:
  short-description: "Review plan.md + dev_log.md + changed files — show on screen, do not write yet"
---

<objective>
Act as the Reviewer. Read plan.md, dev_log.md, and all changed files, then produce a structured code review that checks both code quality and plan coverage. Show it on screen — do not write until /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/dev_log.md`. If missing: stop and tell user to run `/prompts:pio-develop` first.
3. Read `pio/handoff/plan.md`. If missing: note it in the review but continue.
4. Read every file listed in "Files Changed" in the dev log.
5. **Show analysis on screen — do NOT write any file yet.**

   Review for all of the following:

   **Plan coverage (compare implementation vs plan.md):**
   - Is everything described in the plan actually implemented?
   - Are all acceptance criteria met?
   - Was anything implemented that was NOT in the plan (scope creep)?
   - Are there open questions from the plan left unresolved?

   **Code quality:**
   - Bugs and logic errors
   - Regressions (does this break anything that was working?)
   - Pattern violations (inconsistent with the rest of the codebase)
   - Missing error handling or edge cases
   - Security or performance concerns

   Format:
   ```
   ## Code Review Summary
   [1-2 sentence overall assessment]

   ## Plan Coverage
   [What from the plan is missing or incomplete — or "Complete"]

   ## Critical Issues
   [Must-fix — numbered list, or "None"]

   ## Minor Issues
   [Should-fix — numbered list, or "None"]

   ## Recommendation
   APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
   ```

6. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Set Step = `code review shown — awaiting /prompts:pio-accept`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent]): /prompts:pio-reviewcode — reviewed plan.md + dev_log.md. Recommendation: [result]`
7. Tell the user: "Code review complete. Discuss, then run `/prompts:pio-accept` to save it."
</process>

<constraints>
- Do NOT write review_code.md at this stage.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.
</constraints>

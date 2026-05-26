---
name: "pio-reviewcode"
description: "Audit the implementation as an independent Reviewer and show analysis on screen"
metadata:
  short-description: "Review dev_log.md + changed files and show code review — do not write yet"
---

<objective>
Act as the Reviewer. Read the development log and all changed files, then produce a structured code review. Show it on screen — do not write to disk until the user runs /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/reviewer.md` — load your Reviewer role definition.
2. Read `pio/handoff/dev_log.md`
   - If missing: tell the user "No development log found. Have the Coder run `/prompts:pio-develop` first." Stop.
3. Read every file listed in the "Files Changed" section of the dev log.
4. Analyze the implementation for:
   - Bugs and logic errors
   - Regressions (does this break anything that was working?)
   - Pattern violations (inconsistent with the rest of the codebase)
   - Missing error handling or edge cases
   - Security or performance concerns
5. **Show analysis on screen — do NOT write any file yet.**

   Format your output exactly as:
   ```
   ## Code Review Summary
   [1-2 sentence overall assessment]

   ## Critical Issues
   [Must-fix — numbered list, or "None"]

   ## Minor Issues
   [Should-fix — numbered list, or "None"]

   ## Recommendation
   APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
   ```

6. Update `pio/STATUS.md` step: "code review shown — awaiting /prompts:pio-accept"
7. Tell the user: "Code review complete. Discuss, then run `/prompts:pio-accept` to save it."
</process>

<constraints>
- Do NOT write review_code.md or any handoff file at this stage.
- Only update the step field in pio/STATUS.md.
</constraints>

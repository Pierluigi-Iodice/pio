---
name: "pio-reviewcode"
description: "Audit implementation as Reviewer and show analysis on screen"
metadata:
  short-description: "Review dev_log.md + changed files — show on screen, do not write yet"
---

<objective>
Act as the Reviewer. Read dev_log.md and all changed files, show a structured code review on screen. Do not write until /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/dev_log.md`. If missing: stop and tell user to run `/prompts:pio-develop` first.
3. Read every file listed in "Files Changed".
4. **Show analysis on screen — do NOT write any file yet.**

   Format:
   ```
   ## Code Review Summary
   ## Critical Issues
   ## Minor Issues
   ## Recommendation: APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
   ```

5. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `code review shown — awaiting /prompts:pio-accept` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent]): /prompts:pio-reviewcode — reviewed dev_log.md. Recommendation: [result]`
6. Tell the user: "Code review complete. Discuss, then run `/prompts:pio-accept` to save it."
</process>

<constraints>
- Do NOT write review_code_v*.md at this stage.
- Only update Phase/Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

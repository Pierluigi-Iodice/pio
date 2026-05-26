---
name: "pio-review"
description: "Review plan.md as Reviewer and show analysis on screen"
metadata:
  short-description: "Review plan.md — show on screen, do not write yet"
---

<objective>
Act as the Reviewer. Read plan.md and show a structured review on screen. Do not write the review file until the user runs /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/plan.md` — note the version number in the header.
   - If missing: tell the user "No plan found. Have the Planner run `/prompts:pio-plan` first." Stop.
3. Analyze the plan as an independent reviewer with no bias toward the author.
4. **Show analysis on screen — do NOT write any file yet.**

   Format:
   ```
   ## Review Summary
   ## Critical Issues
   ## Minor Issues
   ## Open Questions
   ## Recommendation: APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
   ```

5. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `plan review shown — awaiting /prompts:pio-accept` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent]): /prompts:pio-review — reviewed plan.md [version]. Recommendation: [result]`
6. Tell the user: "Review complete. Discuss, then run `/prompts:pio-accept` to save it."
</process>

<constraints>
- Do NOT write review_plan_v*.md at this stage.
- Only update Phase/Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

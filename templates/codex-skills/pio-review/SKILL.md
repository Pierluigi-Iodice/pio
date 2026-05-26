---
name: "pio-review"
description: "Review the current plan as an independent Reviewer and show analysis on screen"
metadata:
  short-description: "Review pio/handoff/plan.md and show analysis — do not write yet"
---

<objective>
Act as the Reviewer. Read the plan with a fresh perspective and produce a structured review. Show it on screen — do not write to disk until the user runs /prompts:pio-accept.
</objective>

<process>
1. Read `pio/roles/reviewer.md` — load your Reviewer role definition.
2. Read `pio/handoff/plan.md`
   - If missing: tell the user "No plan found. Have the Planner run `/prompts:pio-plan` first." Stop.
3. Analyze the plan as an independent reviewer with no bias toward the author.
4. **Show analysis on screen — do NOT write any file yet.**

   Format your output exactly as:
   ```
   ## Review Summary
   [1-2 sentence overall assessment]

   ## Critical Issues
   [Must-fix before proceeding — numbered list, or "None"]

   ## Minor Issues
   [Should-fix suggestions — numbered list, or "None"]

   ## Open Questions
   [Ambiguities that need PM decision — numbered list, or "None"]

   ## Recommendation
   APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
   ```

5. Update `pio/STATUS.md` step: "plan review shown — awaiting /prompts:pio-accept"
6. Tell the user: "Review complete. Discuss with your team, then run `/prompts:pio-accept` to save it."
</process>

<constraints>
- Do NOT write review_plan.md or any handoff file at this stage.
- Only update the step field in pio/STATUS.md.
</constraints>

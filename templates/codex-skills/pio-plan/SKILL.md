---
name: "pio-plan"
description: "Discuss a feature and write pio/handoff/plan.md v1"
metadata:
  short-description: "Discuss task with user and write plan.md v1"
---

<objective>
Act as the Planner. Discuss the feature, clarify requirements, then write plan.md v1.
</objective>

<process>
1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md`
3. Ask the user to describe the feature or task. Discuss until requirements are clear.
4. Write `pio/handoff/plan.md` using the template at `pio/handoff/plan.md.template`. Set version to **v1** in the header.
5. Update `pio/STATUS.md`:
   - Change ONLY `**Phase:**` to `PLANNING`, `**Step:**` to `plan.md written — awaiting /prompts:pio-review`, and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent]): /prompts:pio-plan — wrote plan.md v1`
6. Tell the user: "Plan written. Switch to your Reviewer and run `/prompts:pio-review`"
</process>

<constraints>
- Only update Phase/Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

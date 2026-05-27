---
name: "pio-plan"
description: "Discuss a feature and write pio/handoff/plan.md"
metadata:
  short-description: "Discuss task with user and write plan.md, archiving any previous version"
---

<objective>
Act as the Planner. Discuss the feature, clarify requirements, then write plan.md. Back up any existing plan.md before overwriting.
</objective>

<process>
1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md`
3. Ask the user to describe the feature or task. Discuss until requirements are clear.
4. If `pio/handoff/plan.md` already exists (this is a re-plan):
   - Count existing `plan_v*.md` backup files in `pio/handoff/`. Call this N.
   - Rename the existing `plan.md` to `plan_v{N+1}.md` to preserve it.
5. Write `pio/handoff/plan.md` using the template at `pio/handoff/plan.md.template`. Set version to **v1** in the header (or increment if re-planning).
6. Update `pio/STATUS.md`:
   - Change ONLY `**Phase:**` to `PLANNING`, `**Step:**` to `plan.md written — awaiting /prompts:pio-review`, and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent]): /prompts:pio-plan — wrote plan.md` (add `(archived previous as plan_v{N+1}.md)` if backup was made)
7. Tell the user: "Plan written. Switch to your Reviewer and run `/prompts:pio-review`"
</process>

<constraints>
- Always back up an existing plan.md before overwriting.
- Only update Phase/Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.
</constraints>

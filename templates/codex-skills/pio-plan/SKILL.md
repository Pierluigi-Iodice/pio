---
name: "pio-plan"
description: "Discuss a feature or task and write the PIO planning document"
metadata:
  short-description: "Discuss a feature or task and write pio/handoff/plan.md"
---

<objective>
Act as the Planner. Discuss the feature or task with the user, clarify requirements and constraints, then write the formal plan to pio/handoff/plan.md.
</objective>

<process>
1. Read `pio/roles/planner.md` — load your Planner role definition.
2. Read `pio/STATUS.md` — check current state.
3. Ask the user to describe the feature or task to plan.
4. Discuss until requirements, scope, and constraints are clear. Ask clarifying questions if needed.
5. Write `pio/handoff/plan.md` using the template at `pio/handoff/plan.md.template`.
   - Include: objective, scope, constraints, approach, files to change, acceptance criteria, open questions.
6. Update `pio/STATUS.md`:
   - phase = PLANNING
   - step = "plan.md written — awaiting /prompts:pio-review from Reviewer"
7. Tell the user: "Plan written. Switch to your Reviewer agent and run `/prompts:pio-review`"
</process>

<constraints>
- Do not skip the discussion step. If requirements are unclear, ask before writing.
- Write only to pio/handoff/plan.md and pio/STATUS.md.
</constraints>

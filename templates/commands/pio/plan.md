You are acting as the **Planner** for this PIO session.

1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md`
3. Ask the user to describe the feature or task to plan
4. Discuss until requirements are clear
5. Write `pio/handoff/plan.md` (use template at `pio/handoff/plan.md.template`). Set version to **v1** in the header.
6. Update `pio/STATUS.md`:
   - Change ONLY `**Phase:**` to `PLANNING`, `**Step:**` to `plan.md written — awaiting /pio:review from Reviewer`, and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent name]): /pio:plan — wrote plan.md v1`
7. Tell the user: "Plan written. Switch to your Reviewer agent and run `/pio:review`"

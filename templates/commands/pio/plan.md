You are acting as the **Planner** for this PIO session.

1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md`
3. Ask the user to describe the feature or task to plan
4. Discuss until requirements are clear
5. If `pio/handoff/plan.md` already exists (this is a re-plan):
   - Count existing `plan_v*.md` backup files in `pio/handoff/`. Call this N.
   - Rename the existing `plan.md` to `plan_v{N+1}.md` to preserve it.
6. Write `pio/handoff/plan.md` (use template at `pio/handoff/plan.md.template`). Set version to **v1** in the header (or increment if re-planning).
7. Update `pio/STATUS.md`:
   - Change ONLY `**Phase:**` to `PLANNING`, `**Step:**` to `plan.md written — awaiting /pio:review from Reviewer`, and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent name]): /pio:plan — wrote plan.md` (add `(archived previous as plan_v{N+1}.md)` if a backup was made)
8. Tell the user: "Plan written. Switch to your Reviewer agent and run `/pio:review`"

Constraints:
- Always back up an existing `plan.md` before overwriting.
- Only update Phase/Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.

---
name: "pio-develop"
description: "Implement from plan.md (or inline brief) and write dev_log.md"
metadata:
  short-description: "Implement feature and write dev_log.md"
---

<objective>
Act as the Coder. Implement the feature from plan.md (or inline brief), then write dev_log.md.
</objective>

<process>
1. Read `pio/roles/coder.md`
2. Check if `pio/handoff/plan.md` exists:
   - If YES: read it, confirm with PM which fragment to implement.
   - If NO: ask PM for a 2-3 sentence inline brief.
3. Implement the feature or fragment.
4. Write `pio/handoff/dev_log.md` (use template). List every file changed.
5. Update `pio/STATUS.md`:
   - Change ONLY `**Phase:**` to `DEVELOPMENT`, `**Step:**` to `dev_log.md written — awaiting /prompts:pio-reviewcode`, and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent]): /prompts:pio-develop — wrote dev_log.md. [1-line summary]`
6. Tell the user: "Implementation complete. Switch to Reviewer and run `/prompts:pio-reviewcode`"
</process>

<constraints>
- Only update Phase/Step/Last updated in STATUS.md. Append to log — never overwrite it.
- Always write dev_log.md — required for the review step.
</constraints>

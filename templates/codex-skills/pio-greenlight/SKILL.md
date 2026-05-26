---
name: "pio-greenlight"
description: "Record a green light approval for the current PIO phase"
metadata:
  short-description: "Append approval to greenlight.md and log in STATUS.md"
---

<objective>
Record this agent's approval for the current phase, then check if all required green lights are in.
</objective>

<process>
1. Read `pio/STATUS.md` for current phase and role assignments.
2. Append to `pio/handoff/greenlight.md` (create if missing):
   ```
   ## Green Light — [Agent Name]
   **Phase:** [current phase]
   **Date:** [today's date]
   **Approved:** [1-2 sentence summary]
   ```
3. Update `pio/STATUS.md`:
   - Change ONLY `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **[role]** ([agent]): /prompts:pio-greenlight — approved [phase]`
4. Check if all required roles have green-lit.
5. Report:
   - All in: "All approved. Proceed to [next phase]."
   - Not yet: "Waiting for [other agent(s)]."
</process>

<constraints>
- Always append to greenlight.md — never overwrite.
- Only update Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

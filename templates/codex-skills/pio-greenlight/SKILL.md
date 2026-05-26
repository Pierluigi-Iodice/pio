---
name: "pio-greenlight"
description: "Record a green light approval for the current PIO phase"
metadata:
  short-description: "Append a green light entry to pio/handoff/greenlight.md"
---

<objective>
Record this agent's approval for the current phase by appending to greenlight.md, then check if all required green lights are in.
</objective>

<process>
1. Read `pio/STATUS.md` to determine the current phase and which agents are assigned.
2. Append to `pio/handoff/greenlight.md` (create if it doesn't exist):

   ```
   ## Green Light — [Agent Name]
   **Phase:** [current phase]
   **Date:** [today's date]
   **Approved:** [1-2 sentence summary of what is being approved and why it's ready]
   ```

3. Update the green light checklist in `pio/STATUS.md`.
4. Check if all required roles have green-lit for this phase.
5. Report:
   - If all green lights are in: "All agents have approved. The phase is complete. Proceed to [next phase]."
   - If not: "Green light recorded. Waiting for [other agent(s)] to also run `/prompts:pio-greenlight`."
</process>

<constraints>
- Always append — never overwrite the greenlight.md file.
- Record the approval only for the current phase, not for future phases.
</constraints>

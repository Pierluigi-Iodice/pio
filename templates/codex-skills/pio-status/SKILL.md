---
name: "pio-status"
description: "Report the current PIO session state"
metadata:
  short-description: "Report the current PIO session state"
---

<objective>
Report the current PIO session state: phase, step, pending action, green lights, and which command to run next.
</objective>

<process>
1. Read `pio/STATUS.md`
   - If missing: tell the user "PIO is not installed or the installation is incomplete. Run `npx pio-installer@latest` in this directory." Stop.
2. Extract and report:
   - Current phase (PLANNING / DEVELOPMENT / QA / IDLE)
   - Current step within the phase
   - Pending action (who needs to do what)
   - Green light status (which agents have approved, which haven't)
   - Last file written to `pio/handoff/`
   - Assigned roles from the Role Assignment section
3. Tell the user exactly which command to run next to advance the workflow.
</process>

<constraints>
- Do not modify any files.
- Output must be concise and actionable — the user should immediately know what to do next.
</constraints>

---
name: "pio-status"
description: "Report the current PIO session state"
metadata:
  short-description: "Read STATUS.md and report phase, step, log, and next command"
---

<objective>
Report the current PIO session state including recent Session Log entries so any agent can orient itself without asking the user.
</objective>

<process>
1. Read `pio/STATUS.md`
   - If missing: tell the user "PIO is not installed. Run `npx pio-installer@latest`." Stop.
2. Report:
   - Current phase and step
   - Pending action
   - Last 3–5 Session Log entries (so agents can see what the other agent already did)
   - Versioned files present in `pio/handoff/` (list review_plan_v*.md, review_code_v*.md, test_review_v*.md with counts)
3. Tell the user exactly which command to run next.
</process>

<constraints>
- Do not modify any files.
- Always show Session Log entries — they are the coordination mechanism between agents.
</constraints>

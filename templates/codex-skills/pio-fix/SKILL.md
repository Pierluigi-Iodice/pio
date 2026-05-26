---
name: "pio-fix"
description: "Apply code review feedback to the implementation"
metadata:
  short-description: "Apply pio/handoff/review_code.md feedback to fix the implementation"
---

<objective>
Act as the Coder. Read the code review, fix all Critical Issues, address Minor Issues, and append a fix log to dev_log.md.
</objective>

<process>
1. Read `pio/handoff/review_code.md`
   - If missing: tell the user "No code review found. Have the Reviewer run `/prompts:pio-reviewcode` and then `/prompts:pio-accept` first." Stop.
2. Read `pio/roles/coder.md`
3. Address **Critical Issues** first — all of them must be fixed.
4. Address **Minor Issues** — apply each, or note briefly why one was skipped.
5. Append a "Fix Log" section to `pio/handoff/dev_log.md`:
   - Each issue addressed: what was wrong and what was changed
   - Anything skipped and why
6. Update `pio/STATUS.md`:
   - step = "fixes applied — run /prompts:pio-reviewcode again or /prompts:pio-greenlight if clean"
7. Tell the user: "Fixes applied. Run `/prompts:pio-reviewcode` for another review pass, or `/prompts:pio-greenlight` if you're satisfied."
</process>

<constraints>
- All Critical Issues must be addressed before moving on.
- Always append to dev_log.md — never overwrite the existing log content.
</constraints>

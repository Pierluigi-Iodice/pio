---
name: "pio-applyreview"
description: "Apply reviewer feedback to the plan and update plan.md"
metadata:
  short-description: "Apply pio/handoff/review_plan.md feedback to update plan.md"
---

<objective>
Act as the Planner. Read the reviewer's feedback and apply each issue to the plan, incrementing the plan version.
</objective>

<process>
1. Read `pio/roles/planner.md`
2. Read `pio/handoff/review_plan.md`
   - If missing: tell the user "No review found. Have the Reviewer run `/prompts:pio-review` and then `/prompts:pio-accept` first." Stop.
3. Read `pio/handoff/plan.md`
4. For each **Critical Issue**: apply the fix, or flag it for PM discussion if the fix requires a scope decision.
5. For each **Minor Issue**: apply it, or note briefly why it was skipped.
6. For each **Open Question**: ask the PM before proceeding.
7. Rewrite `pio/handoff/plan.md` with all changes applied. Increment the version number in the header (e.g., v1 → v2).
8. Report clearly:
   - What was changed and how
   - What was skipped and why
   - What needs PM discussion before proceeding
9. Update `pio/STATUS.md`:
   - step = "plan updated (vN) — ready for /prompts:pio-greenlight or another /prompts:pio-review round"
</process>

<constraints>
- Increment the plan version number in the header on every update.
- Do not change the plan structure — only update content in response to review issues.
</constraints>

You are acting as the **Reviewer** — reviewing the plan.

1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/plan.md` — note the version number in the header.
   - If missing: tell the user "No plan found. Have the Planner run `/pio:plan` first." Stop.
3. Analyze the plan as an independent reviewer with no bias toward the author.
4. **Show analysis on screen — do NOT write any file yet.**

Format your output as:
```
## Review Summary
[1-2 sentence overall assessment]

## Critical Issues
[Must-fix before proceeding — numbered list, or "None"]

## Minor Issues
[Should-fix suggestions — numbered list, or "None"]

## Open Questions
[Ambiguities that need PM decision — numbered list, or "None"]

## Recommendation
APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
```

5. Update `pio/STATUS.md`:
   - Change ONLY the `**Step:**` line to: `plan review shown — awaiting /pio:accept`
   - Change ONLY the `**Last updated:**` line
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent name]): /pio:review — reviewed plan.md [version]. Recommendation: [APPROVED/APPROVED WITH CHANGES/REQUIRES REWORK]`
6. Tell the user: "Review complete. Discuss with your team, then run `/pio:accept` to save it."

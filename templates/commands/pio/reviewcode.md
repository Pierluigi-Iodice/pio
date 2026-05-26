You are acting as the **Reviewer** — reviewing the implementation.

1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/dev_log.md`
   - If missing: tell the user "No development log found. Have the Coder run `/pio:develop` first." Stop.
3. Read every file listed in the "Files Changed" section of the dev log.
4. **Show analysis on screen — do NOT write any file yet.**

Review for:
- Bugs and logic errors
- Regressions (does this break anything that was working?)
- Pattern violations (inconsistent with the rest of the codebase)
- Missing error handling or edge cases
- Security or performance concerns

Format your output as:
```
## Code Review Summary
[1-2 sentence overall assessment]

## Critical Issues
[Must-fix — numbered list, or "None"]

## Minor Issues
[Should-fix — numbered list, or "None"]

## Recommendation
APPROVED / APPROVED WITH CHANGES / REQUIRES REWORK
```

5. Update `pio/STATUS.md`:
   - Change ONLY the `**Step:**` line to: `code review shown — awaiting /pio:accept`
   - Change ONLY the `**Last updated:**` line
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent name]): /pio:reviewcode — reviewed dev_log.md. Recommendation: [APPROVED/APPROVED WITH CHANGES/REQUIRES REWORK]`
6. Tell the user: "Code review complete. Discuss, then run `/pio:accept` to save it."

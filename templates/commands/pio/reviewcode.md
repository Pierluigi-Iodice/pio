You are acting as the **Reviewer** for this PIO session — reviewing the implementation.

1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/dev_log.md`
3. Read each file listed in the "Files Changed" section of the dev log
4. **Show your analysis on screen — do NOT write any file yet**

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

5. Update `pio/STATUS.md` step: "code review shown — awaiting /pio:accept"
6. Tell the user: "Code review complete. Discuss, then run `/pio:accept` to save it."

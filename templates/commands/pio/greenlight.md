Record your green light approval for the current phase.

1. Read `pio/STATUS.md` to determine the current phase
2. Append to `pio/handoff/greenlight.md` (create if it doesn't exist):

```
## Green Light — [Your Agent Name]
**Phase:** [current phase]
**Date:** [today's date]
**Approved:** [1-2 sentence summary of what is being approved]
```

3. Update the green light checklist in `pio/STATUS.md`
4. Check if all required roles have green-lit for this phase
5. Tell the user:
   - If all green lights are in: "All agents have green-lit. Proceed to the next phase."
   - If not: "Green light recorded. Waiting for [other agent] to also run `/pio:greenlight`."

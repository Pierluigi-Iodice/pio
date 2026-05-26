You are acting as the **Coder** for this PIO session.

1. Read `pio/roles/coder.md`
2. Check if `pio/handoff/plan.md` exists:
   - **If YES**: read it and confirm with the PM which fragment or section to implement in this session
   - **If NO**: ask the PM to describe the task in 2-3 sentences — use that as the inline brief
3. Implement the feature or fragment
4. Write `pio/handoff/dev_log.md` using the template at `pio/handoff/dev_log.md.template`
   - Include: what was built, files changed, design decisions, known limitations
5. Update `pio/STATUS.md`:
   - phase = DEVELOPMENT
   - step = "dev_log.md written — awaiting /pio:reviewcode from Reviewer"
6. Tell the user: "Fragment complete. Switch to your Reviewer agent and run `/pio:reviewcode`"

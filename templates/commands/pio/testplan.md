You are acting as the **Tester** — generating the test plan.

1. Read `pio/roles/tester.md`
2. Read `pio/handoff/plan.md` (requirements and acceptance criteria)
3. Read `pio/handoff/dev_log.md` (what was implemented and files changed)
4. Generate a test plan covering: happy path, edge cases, error states, regression checks
5. **Show on screen — do NOT write any file yet**
6. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `test plan shown — awaiting /pio:accept` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Tester** ([agent name]): /pio:testplan — test plan shown on screen. [X] scenarios`
7. Tell the user: "Test plan ready. Review it, then run `/pio:accept` to save `test_plan.md`."

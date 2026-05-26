You are acting as the **Tester** — executing the test plan.

1. Read `pio/handoff/test_plan.md`
   - If missing: tell the user "No test plan found. Run `/pio:testplan` and then `/pio:accept` first." Stop.
2. Execute each test scenario. For each, record: name, steps, actual result, PASS/FAIL/BLOCKED.
3. Write `pio/handoff/test_results.md` (use template at `pio/handoff/test_results.md.template`)
4. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` to `test_results.md written — awaiting /pio:reviewtest from Reviewer` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Tester** ([agent name]): /pio:runtest — wrote test_results.md. Pass: X, Fail: X, Blocked: X`
5. Tell the user: "Tests complete. Switch to your Reviewer agent and run `/pio:reviewtest`"

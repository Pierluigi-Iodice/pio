You are acting as the **Coder** — fixing test failures and regressions.

1. Read `pio/STATUS.md` — check the Session Log for lines containing "bugfix" to find which test_review versions have already been processed.
2. List all files in `pio/handoff/` matching `test_review_v*.md`.
3. Identify the **latest unprocessed** test review file.
   - If all are already processed: tell the user "No new test review to apply. Run `/pio:runtest` to produce new results." Stop.
4. Fix all **REGRESSION** items first — highest priority.
5. Fix all **FAIL** items.
6. Append a "Bug Fix Log" section to `pio/handoff/dev_log.md`:
   - Source review file used (e.g. `test_review_v2.md`)
   - Each item fixed: what was wrong and what was changed
   - Any item that could not be fixed and why
7. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent name]): /pio:bugfix — applied [review filename]. [1-line summary]`
8. Tell the user: "Bug fixes applied. Re-run `/pio:runtest` to verify."

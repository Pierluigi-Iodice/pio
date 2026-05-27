You are acting as the **Coder** — fixing test failures and regressions.

1. Read `pio/STATUS.md` — note the Session Log entries.
2. **Read `pio/handoff/test_review.md`** — this is the test review file. Read it first.
   - If it does not exist: tell the user "No test review found. Have the Reviewer run `/pio:reviewtest`, then `/pio:accept`." Stop.
3. Dedup check: scan the Session Log.
   - Find the timestamp of the most recent `/pio:accept` entry that mentions `test_review`.
   - Find the timestamp of the most recent `/pio:bugfix` entry.
   - If the `bugfix` entry is **more recent** than the `accept` entry → already applied. Tell the user "test_review.md has already been applied. Run `/pio:runtest` to produce new results." Stop.
4. Fix all **REGRESSION** items first — highest priority.
5. Fix all **FAIL** items.
6. Append a "Bug Fix Log" section to `pio/handoff/dev_log.md`:
   - Each item fixed: what was wrong and what was changed
   - Any item that could not be fixed and why
7. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent name]): /pio:bugfix — applied test_review.md. [1-line summary]`
8. Tell the user: "Bug fixes applied. Re-run `/pio:runtest` to verify."

Constraints:
- Read `test_review.md` first — this is the test review, not test results.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.

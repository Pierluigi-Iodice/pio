You are acting as the **Coder** — fixing test failures and regressions.

1. Read `pio/handoff/test_review.md`
2. Fix all **FAIL** items
3. Fix all **REGRESSION** items — these are highest priority
4. Append a "Bug Fix Log" section to `pio/handoff/dev_log.md`:
   - Each item fixed, what was wrong, what was changed
5. Update `pio/STATUS.md`:
   - step = "bug fixes applied — re-run /pio:runtest to verify"
6. Tell the user: "Bug fixes applied. Re-run `/pio:runtest` to verify all scenarios pass."

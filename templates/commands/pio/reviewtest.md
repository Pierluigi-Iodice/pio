You are acting as the **Reviewer** — validating the test results.

1. Read `pio/handoff/test_results.md`
   - If missing: tell the user "No test results found. Have the Tester run `/pio:runtest` first." Stop.
2. Classify each test result:
   - ✅ PASS — working as expected
   - ❌ FAIL — not working, needs a fix
   - ⚠️ REGRESSION — was working before, now broken (highest priority)
3. **Show analysis on screen — do NOT write any file yet.**

Format your output as:
```
## Test Review Summary
Total: X — Pass: X — Fail: X — Regression: X

## Results Table
| Scenario | Result | Notes |
|----------|--------|-------|
...

## Failures & Regressions
[For each FAIL/REGRESSION: description + recommended fix]

## Recommendation
READY TO SHIP / FIX REQUIRED
```

4. Update `pio/STATUS.md`:
   - Change ONLY the `**Step:**` line to: `test review shown — awaiting /pio:accept`
   - Change ONLY the `**Last updated:**` line
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Reviewer** ([agent name]): /pio:reviewtest — Pass: X, Fail: X, Regression: X. Recommendation: [READY TO SHIP/FIX REQUIRED]`
5. Tell the user: "Test review complete. Discuss, then run `/pio:accept` to save it."

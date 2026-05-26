You are acting as the **Reviewer** — validating the test results.

1. Read `pio/handoff/test_results.md`
2. Classify each test result:
   - ✅ PASS — working as expected
   - ❌ FAIL — not working, needs a fix
   - ⚠️ REGRESSION — was working before, now broken
3. **Show your analysis on screen — do NOT write any file yet**

Format your output as:
```
## Test Review Summary
[Pass count / Fail count / Regression count]

## Results Table
| Scenario | Result | Notes |
|----------|--------|-------|
...

## Failures Detail
[For each FAIL/REGRESSION: description + recommended fix]

## Recommendation
READY TO SHIP / FIX REQUIRED
```

4. Update `pio/STATUS.md` step: "test review shown — awaiting /pio:accept"
5. Tell the user: "Test review complete. Discuss, then run `/pio:accept` to save it."

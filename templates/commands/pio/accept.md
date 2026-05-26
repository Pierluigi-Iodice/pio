Save the last analysis shown on screen to the correct handoff file.

1. Read `pio/STATUS.md` to determine the current step
2. Save the analysis based on the current step:
   - step contains "plan review shown"  → write `pio/handoff/review_plan.md`
   - step contains "code review shown"  → write `pio/handoff/review_code.md`
   - step contains "test plan shown"    → write `pio/handoff/test_plan.md`
   - step contains "test review shown"  → write `pio/handoff/test_review.md`
3. Update `pio/STATUS.md` step to reflect the file was saved
4. Tell the user which file was written and what command to run next

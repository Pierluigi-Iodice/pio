---
name: "pio-accept"
description: "Save the last analysis shown on screen to the correct handoff file"
metadata:
  short-description: "Persist the last on-screen review to the correct pio/handoff/ file"
---

<objective>
Save the review or analysis that was last shown on screen to the correct handoff file, based on the current workflow step recorded in pio/STATUS.md.
</objective>

<process>
1. Read `pio/STATUS.md` to determine the current step.
2. Match the step to the target file:
   - step contains "plan review shown"  → write `pio/handoff/review_plan.md`
   - step contains "code review shown"  → write `pio/handoff/review_code.md`
   - step contains "test plan shown"    → write `pio/handoff/test_plan.md`
   - step contains "test review shown"  → write `pio/handoff/test_review.md`
   - If no recognized step: tell the user "Nothing to accept. Run a review command first."
3. Write the full review content from the last response to the target file.
4. Update `pio/STATUS.md` step to reflect the file was saved (e.g., "review_plan.md saved — ready for /prompts:pio-applyreview").
5. Tell the user:
   - Which file was written
   - Which command to run next
</process>

<constraints>
- Only write the file that matches the current step — never overwrite the wrong handoff file.
- Do not modify plan.md, dev_log.md, or any file that is not the review artifact for this step.
</constraints>

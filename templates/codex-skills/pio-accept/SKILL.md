---
name: "pio-accept"
description: "Save the last on-screen review to the correct versioned handoff file"
metadata:
  short-description: "Persist the last review to a versioned pio/handoff/ file"
---

<objective>
Save the review shown on screen to a versioned handoff file. The version number is determined by counting existing files of the same type — never overwrites a previous review.
</objective>

<process>
1. Read `pio/STATUS.md` to determine the current step.
2. Match the step to the target file family:
   - step contains "plan review shown"  → family: `review_plan_v*.md`
   - step contains "code review shown"  → family: `review_code_v*.md`
   - step contains "test plan shown"    → write `pio/handoff/test_plan.md` (not versioned)
   - step contains "test review shown"  → family: `test_review_v*.md`
   - If no recognized step: tell the user "Nothing to accept. Run a review command first." Stop.
3. For versioned families: list existing files matching the pattern in `pio/handoff/`. Next version = count + 1.
   Example: `review_plan_v1.md` exists → write `review_plan_v2.md`.
4. Write the full review content to the determined file.
5. Update `pio/STATUS.md`:
   - Change ONLY the `**Step:**` and `**Last updated:**` lines.
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **[role]** ([agent]): /prompts:pio-accept → wrote [filename]`
6. Tell the user which file was written and which command to run next.
</process>

<constraints>
- Never overwrite an existing review file — always increment the version.
- Only update Phase/Step/Last updated fields in STATUS.md. Never overwrite the Session Log.
</constraints>

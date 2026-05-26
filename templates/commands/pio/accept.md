Save the last analysis shown on screen to the correct versioned handoff file.

1. Read `pio/STATUS.md` to determine the current step.
2. Match the step to the target file type:
   - step contains "plan review shown"  → target family: `review_plan_v*.md`
   - step contains "code review shown"  → target family: `review_code_v*.md`
   - step contains "test plan shown"    → target family: `test_plan.md` (not versioned)
   - step contains "test review shown"  → target family: `test_review_v*.md`
   - If no recognized step: tell the user "Nothing to accept. Run a review command first." Stop.
3. For versioned families (`review_plan`, `review_code`, `test_review`):
   - List existing files in `pio/handoff/` matching that pattern
   - Next version = count of existing files + 1
   - Example: if `review_plan_v1.md` exists → write `review_plan_v2.md`
4. Write the full review content to the determined file.
5. Update `pio/STATUS.md`:
   - Change ONLY the `**Step:**` and `**Last updated:**` lines
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **[your role]** ([agent name]): /pio:accept → wrote [filename]`
6. Tell the user which file was written and which command to run next.

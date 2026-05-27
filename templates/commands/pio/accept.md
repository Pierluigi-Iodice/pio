Save the review shown on screen to the correct handoff file.

1. Read `pio/STATUS.md` to determine the current step.
2. Match the step to the target file:
   - step contains "plan review shown"  → `pio/handoff/review_plan.md`
   - step contains "code review shown"  → `pio/handoff/review_code.md`
   - step contains "test plan shown"    → `pio/handoff/test_plan.md` (skip backup — not a review)
   - step contains "test review shown"  → `pio/handoff/test_review.md`
   - No recognized step: tell the user "Nothing to accept. Run a review command first." Stop.
3. If the target file already exists (this is a second or later review cycle):
   - Count existing backup files matching `{base}_v*.md` in `pio/handoff/`. Call this N.
   - **Before writing**, rename the existing file to `{base}_v{N+1}.md` to preserve it.
   - Example: `review_plan.md` already exists, `review_plan_v1.md` exists → rename current to `review_plan_v2.md`.
4. Write the full review content to the flat-name target file (e.g. `review_plan.md`).
5. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **[your role]** ([agent name]): /pio:accept → wrote [filename]` (add `(archived previous as [vN filename])` if a backup was made)
6. Tell the user which file was written and which command to run next.

Constraints:
- Always back up an existing file before overwriting — never silently delete previous content.
- The flat-name file (e.g. `review_plan.md`) is always the latest. Numbered backups (`_v1`, `_v2`) are archives.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.

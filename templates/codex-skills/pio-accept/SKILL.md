---
name: "pio-accept"
description: "Save the last on-screen review to the correct handoff file, archiving the previous version"
metadata:
  short-description: "Persist the last review to pio/handoff/, backing up the previous file"
---

<objective>
Save the review shown on screen to the correct flat-name handoff file. If a previous version exists, rename it with a version number before writing the new one.
</objective>

<process>
1. Read `pio/STATUS.md` to determine the current step.
2. Match the step to the target file:
   - step contains "plan review shown"  → `pio/handoff/review_plan.md`
   - step contains "code review shown"  → `pio/handoff/review_code.md`
   - step contains "test plan shown"    → `pio/handoff/test_plan.md` (no backup)
   - step contains "test review shown"  → `pio/handoff/test_review.md`
   - No recognized step: tell the user "Nothing to accept. Run a review command first." Stop.
3. If the target file already exists (second cycle or later):
   - Count existing backup files matching `{base}_v*.md` in `pio/handoff/`. Call this N.
   - **Rename** the existing flat-name file to `{base}_v{N+1}.md` to preserve it.
   - Example: `review_plan.md` exists, `review_plan_v1.md` also exists → rename to `review_plan_v2.md`.
4. Write the full review content to the flat-name target file.
5. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **[role]** ([agent]): /prompts:pio-accept → wrote [filename]` (add `(archived previous as [vN filename])` if backup was made)
6. Tell the user which file was written and which command to run next.
</process>

<constraints>
- Always back up an existing file before overwriting — never silently delete previous content.
- The flat-name file (e.g. `review_plan.md`) is always the latest. Numbered backups (`_v1`, `_v2`) are archives.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.
</constraints>

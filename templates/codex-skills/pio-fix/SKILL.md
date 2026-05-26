---
name: "pio-fix"
description: "Apply the latest unprocessed code review to the implementation"
metadata:
  short-description: "Apply latest review_code_v*.md and append fix log to dev_log.md"
---

<objective>
Act as the Coder. Find the latest review_code_v*.md not yet processed, apply its fixes, and log which review was used.
</objective>

<process>
1. Read `pio/STATUS.md` — scan the Session Log for lines containing "pio-fix" or "/pio:fix" to see which review_code_v*.md files have already been processed.
2. List all `review_code_v*.md` files in `pio/handoff/`.
3. Identify the **latest unprocessed** review file.
   - If all already processed: tell the user "No new code review to apply. Run `/prompts:pio-reviewcode` for a new cycle." Stop.
4. Read the identified review file.
5. Read `pio/roles/coder.md`
6. Fix all **Critical Issues** first.
7. Address **Minor Issues** — apply or note why skipped.
8. Append a "Fix Log" section to `pio/handoff/dev_log.md`:
   - Source review file (e.g. `review_code_v2.md`)
   - Each issue: what was wrong, what was changed
   - Anything skipped and why
9. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent]): /prompts:pio-fix — applied [review filename]. [1-line summary]`
10. Tell the user: "Fixes applied. Run `/prompts:pio-reviewcode` for another pass, or `/prompts:pio-greenlight` if clean."
</process>

<constraints>
- Never reprocess a review already in the Session Log.
- Always append to dev_log.md — never overwrite it.
- Only update Phase/Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

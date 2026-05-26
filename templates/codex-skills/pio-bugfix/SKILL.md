---
name: "pio-bugfix"
description: "Apply the latest unprocessed test review to fix failures and regressions"
metadata:
  short-description: "Apply latest test_review_v*.md to fix FAIL and REGRESSION items"
---

<objective>
Act as the Coder. Find the latest test_review_v*.md not yet processed, fix all FAIL and REGRESSION items (regressions first), and log which review was used.
</objective>

<process>
1. Read `pio/STATUS.md` — scan the Session Log for "pio-bugfix" entries to see which test_review_v*.md files have been processed.
2. List all `test_review_v*.md` files in `pio/handoff/`.
3. Identify the **latest unprocessed** test review.
   - If all already processed: tell the user "No new test review to apply. Run `/prompts:pio-runtest` to produce new results." Stop.
4. Fix all **REGRESSION** items first — highest priority.
5. Fix all **FAIL** items.
6. Append a "Bug Fix Log" section to `pio/handoff/dev_log.md`:
   - Source review file (e.g. `test_review_v2.md`)
   - Each item fixed: what was wrong, what was changed
   - Any item not fixable and why
7. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent]): /prompts:pio-bugfix — applied [review filename]. [1-line summary]`
8. Tell the user: "Bug fixes applied. Re-run `/prompts:pio-runtest` to verify."
</process>

<constraints>
- Never reprocess a review already in the Session Log.
- Always append to dev_log.md — never overwrite.
- Only update Phase/Step/Last updated in STATUS.md. Append to log — never overwrite it.
</constraints>

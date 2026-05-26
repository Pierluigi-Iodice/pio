---
name: "pio-applyreview"
description: "Apply the latest unprocessed plan review to plan.md"
metadata:
  short-description: "Apply latest review_plan_v*.md to update plan.md"
---

<objective>
Act as the Planner. Find the latest review file not yet processed (by reading the Session Log), apply its feedback to plan.md, and log which review was used — preventing duplicate processing.
</objective>

<process>
1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md` — scan the Session Log for lines containing "applyreview" to see which review_plan_v*.md files have already been processed.
3. List all `review_plan_v*.md` files in `pio/handoff/`.
4. Identify the **latest unprocessed** review (highest version not yet logged as processed).
   - If all reviews already appear in the log: tell the user "No new review to apply. Run `/prompts:pio-review` for a new review cycle." Stop.
5. Read the identified review file.
6. Read `pio/handoff/plan.md` — note the current version in the header.
7. For each **Critical Issue**: apply the fix, or flag for PM discussion.
8. For each **Minor Issue**: apply or note why skipped.
9. For each **Open Question**: ask PM before proceeding.
10. Rewrite `pio/handoff/plan.md` with changes applied. Increment version in header.
11. Report: what changed, what was skipped and why, what needs PM discussion.
12. Update `pio/STATUS.md`:
    - Change ONLY `**Step:**` and `**Last updated:**`
    - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent]): /prompts:pio-applyreview — applied [review filename] → plan.md updated to v[N]. [1-line summary]`
</process>

<constraints>
- Never reprocess a review already in the Session Log.
- Only update Phase/Step/Last updated fields in STATUS.md. Append to log — never overwrite it.
</constraints>

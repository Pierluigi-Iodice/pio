You are acting as the **Planner** — applying the reviewer's feedback to the plan.

1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md` — check the Session Log for lines containing "applyreview" to find which review versions have already been processed.
3. List all files in `pio/handoff/` matching `review_plan_v*.md`.
4. Identify the **latest unprocessed** review file (highest version number not yet in the Session Log as processed).
   - If all existing reviews are already logged as processed: tell the user "No new review to apply. Run `/pio:review` for a new review cycle." Stop.
5. Read the identified review file (e.g. `review_plan_v2.md`).
6. Read `pio/handoff/plan.md` — note the current version number in the header.
7. For each **Critical Issue**: apply the fix, or flag it for PM discussion if the fix requires a scope decision.
8. For each **Minor Issue**: apply it, or note briefly why it was skipped.
9. For each **Open Question**: ask the PM before proceeding.
10. Rewrite `pio/handoff/plan.md` with all changes applied. Increment the version number in the header (e.g. v1 → v2).
11. Report clearly: what was changed, what was skipped and why, what needs PM discussion.
12. Update `pio/STATUS.md`:
    - Change ONLY the `**Step:**` and `**Last updated:**` lines
    - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent name]): /pio:applyreview — applied [review filename] → plan.md updated to v[N]. [1-line summary of main changes]`

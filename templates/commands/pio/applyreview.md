You are acting as the **Planner** — applying the reviewer's feedback to the plan.

1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md` — note the Session Log entries.
3. **Read `pio/handoff/review_plan.md`** — this is the review file. Read it first, before anything else.
   - If it does not exist: tell the user "No plan review found. Have the Reviewer run `/pio:review`, then `/pio:accept`." Stop.
4. Dedup check: scan the Session Log.
   - Find the timestamp of the most recent `/pio:accept` entry that mentions `review_plan`.
   - Find the timestamp of the most recent `/pio:applyreview` entry.
   - If the `applyreview` entry is **more recent** than the `accept` entry → this review has already been applied. Tell the user "review_plan.md has already been applied. Run `/pio:review` for a new review cycle." Stop.
5. Read `pio/handoff/plan.md`.
6. **Back up the current plan** before modifying:
   - Count existing `plan_v*.md` files in `pio/handoff/`. Call this N.
   - Copy `plan.md` to `plan_v{N+1}.md`.
7. For each **Critical Issue**: apply the fix, or flag it for PM discussion if it requires a scope decision.
8. For each **Minor Issue**: apply it, or briefly note why it was skipped.
9. For each **Open Question**: ask the PM before proceeding.
10. Rewrite `pio/handoff/plan.md` with all changes applied. Increment the version number in the header.
11. Report clearly: what was changed, what was skipped and why, what needs PM discussion.
12. Update `pio/STATUS.md`:
    - Change ONLY `**Step:**` and `**Last updated:**`
    - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Planner** ([agent name]): /pio:applyreview — applied review_plan.md → plan.md updated. [1-line summary of main changes]`
13. Tell the user: run `/pio:review` for another pass, or `/pio:develop` if the plan is approved.

Constraints:
- Read `review_plan.md` first — never read `plan.md` first.
- Never modify plan.md without backing it up to `plan_v{N+1}.md` first.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.

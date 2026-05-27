---
name: "pio-fix"
description: "Apply the code review in review_code.md to the implementation"
metadata:
  short-description: "Read review_code.md and apply fixes, append fix log to dev_log.md"
---

<objective>
Act as the Coder. Read the code review file and apply its feedback to the implementation.
</objective>

<process>
1. Read `pio/roles/coder.md`
2. Read `pio/STATUS.md` — note the Session Log entries.
3. **Read `pio/handoff/review_code.md`** — this is the code review. Read it first.
   - If it does not exist: tell the user "No code review found. Have the Reviewer run `/prompts:pio-reviewcode`, then `/prompts:pio-accept`." Stop.
4. Dedup check: scan the Session Log.
   - Find the timestamp of the most recent `/prompts:pio-accept` entry that mentions `review_code`.
   - Find the timestamp of the most recent `/prompts:pio-fix` entry.
   - If the `fix` entry is **more recent** than the `accept` entry → already applied. Tell the user "review_code.md has already been applied. Run `/prompts:pio-reviewcode` for a new review cycle." Stop.
5. Fix all **Critical Issues** first.
6. Address **Minor Issues** — apply or note why skipped.
7. Append a "Fix Log" section to `pio/handoff/dev_log.md`:
   - Each issue: what was wrong, what was changed
   - Anything skipped and why
8. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent]): /prompts:pio-fix — applied review_code.md. [1-line summary]`
9. Tell the user: "Fixes applied. Run `/prompts:pio-reviewcode` for another pass, or `/prompts:pio-greenlight` if clean."
</process>

<constraints>
- Read `review_code.md` first — this is the review file, not the source code.
- Always append to dev_log.md — never overwrite it.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.
</constraints>

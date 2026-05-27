You are acting as the **Coder** — applying the code reviewer's feedback.

1. Read `pio/roles/coder.md`
2. Read `pio/STATUS.md` — note the Session Log entries.
3. **Read `pio/handoff/review_code.md`** — this is the code review file. Read it first.
   - If it does not exist: tell the user "No code review found. Have the Reviewer run `/pio:reviewcode`, then `/pio:accept`." Stop.
4. Dedup check: scan the Session Log.
   - Find the timestamp of the most recent `/pio:accept` entry that mentions `review_code`.
   - Find the timestamp of the most recent `/pio:fix` entry.
   - If the `fix` entry is **more recent** than the `accept` entry → already applied. Tell the user "review_code.md has already been applied. Run `/pio:reviewcode` for a new review cycle." Stop.
5. Address **Critical Issues** first — all of them must be fixed.
6. Address **Minor Issues** — apply each, or briefly note why one was skipped.
7. Append a "Fix Log" section to `pio/handoff/dev_log.md`:
   - Each issue addressed: what was wrong and what was changed
   - Anything skipped and why
8. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent name]): /pio:fix — applied review_code.md. [1-line summary]`
9. Tell the user: "Fixes applied. Run `/pio:reviewcode` for another pass, or `/pio:greenlight` if clean."

Constraints:
- Read `review_code.md` first — this is the review, not the source code.
- Only update Step/Last updated in STATUS.md. Append to Session Log — never overwrite it.

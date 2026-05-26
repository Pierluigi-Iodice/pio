You are acting as the **Coder** — applying the code reviewer's feedback.

1. Read `pio/STATUS.md` — check the Session Log for lines containing "fix" to find which review_code versions have already been processed.
2. List all files in `pio/handoff/` matching `review_code_v*.md`.
3. Identify the **latest unprocessed** review file.
   - If all are already processed: tell the user "No new code review to apply. Run `/pio:reviewcode` for a new review cycle." Stop.
4. Read the identified review file.
5. Read `pio/roles/coder.md`
6. Address **Critical Issues** first — all of them must be fixed.
7. Address **Minor Issues** — apply each, or note briefly why one was skipped.
8. Append a "Fix Log" section to `pio/handoff/dev_log.md`:
   - Source review file used (e.g. `review_code_v2.md`)
   - Each issue addressed: what was wrong and what was changed
   - Anything skipped and why
9. Update `pio/STATUS.md`:
   - Change ONLY `**Step:**` and `**Last updated:**`
   - Append to Session Log: `- [YYYY-MM-DD HH:MM] **Coder** ([agent name]): /pio:fix — applied [review filename]. [1-line summary]`
10. Tell the user: "Fixes applied. Run `/pio:reviewcode` for another pass, or `/pio:greenlight` if clean."

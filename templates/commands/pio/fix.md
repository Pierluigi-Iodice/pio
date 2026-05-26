You are acting as the **Coder** — applying the code reviewer's feedback.

1. Read `pio/handoff/review_code.md`
2. Address **Critical Issues** first — all of them must be fixed
3. Address **Minor Issues** — apply each or note briefly why it was skipped
4. Append a "Fix Log" section to `pio/handoff/dev_log.md`:
   - List each issue addressed and what was done
   - List anything skipped and why
5. Update `pio/STATUS.md`:
   - step = "fixes applied — run /pio:reviewcode again or /pio:greenlight if clean"
6. Tell the user: "Fixes applied. Run `/pio:reviewcode` for another review pass, or `/pio:greenlight` if you're satisfied."

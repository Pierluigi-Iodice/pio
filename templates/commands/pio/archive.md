Archive this completed session and reset PIO for the next feature.

1. Read `pio/STATUS.md` for the feature name.
2. Create: `pio/archive/[YYYY-MM-DD_feature-name]/`
3. Move to archive (skip silently if file doesn't exist):
   - `plan.md` and all `plan_v*.md` backups
   - `review_plan.md` and all `review_plan_v*.md` backups
   - `dev_log.md`
   - `review_code.md` and all `review_code_v*.md` backups
   - `test_plan.md`
   - `test_results.md`
   - `test_review.md` and all `test_review_v*.md` backups
   - `greenlight.md`
4. **Do NOT move**: `handoff/README.md` and any `*.template` files.
5. Reset `pio/STATUS.md` to initial state:
   - Phase = IDLE, Step = "Run /pio:plan to begin"
   - Clear Feature field
   - Keep Role Assignment section intact
   - Clear Session Log (replace content with `*(no entries yet)*`)
6. Tell the user: "Session archived at `pio/archive/[folder-name]/`. PIO ready for next feature."

Constraints:
- Move ALL backup files (`_v1`, `_v2`...) not just the flat-name current file.
- Never delete or move `handoff/README.md` or any `*.template` file.
- Never overwrite an existing archive folder — append `_2`, `_3` etc. if it already exists.

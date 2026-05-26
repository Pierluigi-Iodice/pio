Archive this completed session and reset PIO for the next feature.

1. Read `pio/STATUS.md` for the feature name.
2. Create: `pio/archive/[YYYY-MM-DD_feature-name]/`
3. Move to archive (skip silently if file doesn't exist):
   - `plan.md`
   - all `review_plan_v*.md`
   - `dev_log.md`
   - all `review_code_v*.md`
   - `test_plan.md`
   - `test_results.md`
   - all `test_review_v*.md`
   - `greenlight.md`
4. **Do NOT move**: `handoff/README.md` and any `*.template` files.
5. Reset `pio/STATUS.md` to initial state:
   - Phase = IDLE, Step = "Run /pio:plan to begin"
   - Clear Feature field
   - Keep Role Assignment section intact
   - Clear Session Log (replace with `*(no entries yet)*`)
6. Tell the user: "Session archived at `pio/archive/[folder-name]/`. PIO ready for next feature."

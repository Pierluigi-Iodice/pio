Archive this completed session and reset PIO for the next feature.

1. Read `pio/STATUS.md` for the feature name
2. Create the archive directory: `pio/archive/[YYYY-MM-DD_feature-name]/`
3. Move the following session files from `pio/handoff/` into the archive directory:
   - `plan.md`
   - `review_plan.md`
   - `dev_log.md`
   - `review_code.md`
   - `test_plan.md`
   - `test_results.md`
   - `test_review.md`
   - `greenlight.md`
   
   **Do NOT move**: `README.md` and any `*.template` files — these are part of the install.

4. Reset `pio/STATUS.md` to the initial blank state (phase=IDLE, all fields empty)
5. Tell the user: "Session archived at `pio/archive/[folder-name]/`. PIO is ready for the next feature. Run `/pio:plan` to start."

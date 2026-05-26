---
name: "pio-archive"
description: "Archive the completed session and reset PIO for the next feature"
metadata:
  short-description: "Move handoff files to archive/ and reset pio/STATUS.md"
---

<objective>
Archive all session handoff files for the completed feature, then reset pio/STATUS.md to the initial state so PIO is ready for the next feature.
</objective>

<process>
1. Read `pio/STATUS.md` for the feature name.
2. Create the archive directory: `pio/archive/[YYYY-MM-DD_feature-name]/`
   - Use today's date and a slug derived from the feature name.
3. Move the following session files from `pio/handoff/` into the archive directory:
   - `plan.md`
   - `review_plan.md`
   - `dev_log.md`
   - `review_code.md`
   - `test_plan.md`
   - `test_results.md`
   - `test_review.md`
   - `greenlight.md`
   - Only move a file if it exists — skip silently if it doesn't.
4. **Do NOT move or touch these files** — they are permanent install artifacts:
   - `pio/handoff/README.md`
   - `pio/handoff/*.template`
5. Reset `pio/STATUS.md` to the initial blank state:
   - phase = IDLE
   - All step, pending action, green light, and feature fields cleared.
6. Tell the user: "Session archived at `pio/archive/[folder-name]/`. PIO is ready for the next feature. Run `/prompts:pio-plan` to start."
</process>

<constraints>
- Never delete pio/handoff/README.md or any *.template file.
- Never overwrite existing archive folders — if the folder already exists, append a counter suffix (e.g., _2).
</constraints>

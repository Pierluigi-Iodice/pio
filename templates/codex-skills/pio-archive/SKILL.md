---
name: "pio-archive"
description: "Archive completed session and reset PIO for the next feature"
metadata:
  short-description: "Move all handoff files (including backups) to archive/ and reset STATUS.md"
---

<objective>
Archive all session files (current versions and all versioned backups), then reset STATUS.md to initial state.
</objective>

<process>
1. Read `pio/STATUS.md` for the feature name.
2. Create: `pio/archive/[YYYY-MM-DD_feature-name]/`
3. Move to archive (skip silently if not present):
   - `plan.md` and all `plan_v*.md`
   - `review_plan.md` and all `review_plan_v*.md`
   - `dev_log.md`
   - `review_code.md` and all `review_code_v*.md`
   - `test_plan.md`
   - `test_results.md`
   - `test_review.md` and all `test_review_v*.md`
   - `greenlight.md`
4. **Do NOT move**: `handoff/README.md` and `*.template` files.
5. Reset `pio/STATUS.md`:
   - Phase = IDLE, Step = "Run /prompts:pio-plan to begin"
   - Clear Feature field
   - Keep Role Assignment section intact
   - Replace Session Log content with `*(no entries yet)*`
6. Tell the user: "Session archived at `pio/archive/[folder]/`. PIO ready for next feature."
</process>

<constraints>
- Move ALL files: flat names (plan.md) AND all versioned backups (plan_v1.md, plan_v2.md...).
- Never delete handoff/README.md or *.template files.
- Never overwrite existing archive folders — append `_2`, `_3` etc. if folder already exists.
</constraints>

---
name: "pio-archive"
description: "Archive completed session and reset PIO for the next feature"
metadata:
  short-description: "Move all handoff files to archive/ and reset STATUS.md"
---

<objective>
Archive all session files (including all versioned review files), then reset STATUS.md to initial state.
</objective>

<process>
1. Read `pio/STATUS.md` for the feature name.
2. Create: `pio/archive/[YYYY-MM-DD_feature-name]/`
3. Move to archive (skip if not present):
   - `plan.md`
   - all `review_plan_v*.md`
   - `dev_log.md`
   - all `review_code_v*.md`
   - `test_plan.md`
   - `test_results.md`
   - all `test_review_v*.md`
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
- Move ALL versioned review files (v1, v2, v3...) — not just the latest.
- Never delete handoff/README.md or *.template files.
</constraints>

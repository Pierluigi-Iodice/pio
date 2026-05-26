<!-- PIO START -->
# PIO — Project Integration Orchestration
# Claude Code Configuration

This project uses the PIO multi-agent workflow protocol.
Read `pio/STATUS.md` at the start of every session to understand the current state.

## Your Assigned Roles
Default: Planner (Phase 1) and Coder (Phase 2).
Check `pio/STATUS.md` → Role Assignment. All `/pio:*` commands are available regardless of role assignment.

## PIO Commands

### `/pio:status`
1. Read `pio/STATUS.md`
2. Report: current phase, pending action, green light status, last file written
3. Tell user what command to run next

### `/pio:plan`
1. Read `pio/roles/planner.md`
2. Read `pio/STATUS.md`
3. Ask user to describe the feature or task
4. Discuss until requirements are clear
5. Write `pio/handoff/plan.md` (use template at `pio/handoff/plan.md.template`)
6. Update `pio/STATUS.md`: phase=PLANNING, step="plan.md written — awaiting /pio:review from Reviewer"
7. Tell user: "Plan written. Switch to your Reviewer agent and run `/pio:review`"

### `/pio:applyreview`
1. Read `pio/handoff/review_plan.md`
2. For each Critical Issue: apply fix or flag for PM discussion
3. For each Minor Issue: apply or note why not
4. For each Open Question: ask PM before proceeding
5. Update `pio/handoff/plan.md` — increment version in header
6. Report: what changed, what was skipped and why, what needs discussion
7. Update `pio/STATUS.md`

### `/pio:greenlight`
1. Read `pio/STATUS.md` for current phase
2. Append to `pio/handoff/greenlight.md`:
   ## Green Light — Claude Code
   **Phase:** [current phase]
   **Date:** [timestamp]
   **Approved:** [1-2 sentence summary]
3. Update `pio/STATUS.md` green light checklist
4. Tell user: "Green light recorded. Check if Reviewer has also green-lit."

### `/pio:develop`
1. Read `pio/roles/coder.md`
2. Check if `pio/handoff/plan.md` exists:
   → If YES: read it and confirm which fragment to implement with PM
   → If NO:  ask PM to describe the task in 2-3 sentences (acts as inline brief)
3. Implement
4. Write `pio/handoff/dev_log.md` (use template)
5. Update `pio/STATUS.md`: phase=DEVELOPMENT
6. Tell user: "Fragment complete. Switch to Reviewer and run `/pio:reviewcode`"

### `/pio:fix`
1. Read `pio/handoff/review_code.md`
2. Address Critical Issues first, then Minor
3. Append "Fix Log" section to `pio/handoff/dev_log.md`
4. Update `pio/STATUS.md`
5. Tell user: "Fixes applied. Run `/pio:reviewcode` again or `/pio:greenlight` if clean."

### `/pio:runtest`
1. Read `pio/handoff/test_plan.md`
2. Execute each test scenario
3. Write `pio/handoff/test_results.md` (use template)
4. Update `pio/STATUS.md`
5. Tell user: "Tests done. Switch to Reviewer and run `/pio:reviewtest`"

### `/pio:bugfix`
1. Read `pio/handoff/test_review.md`
2. Fix all FAIL and REGRESSION items
3. Append fix log to `pio/handoff/dev_log.md`
4. Update `pio/STATUS.md`
5. Tell user: "Bug fixes applied. Re-run `/pio:runtest` to verify."

### `/pio:archive`
1. Read `pio/STATUS.md` for feature name
2. Create `pio/archive/[YYYY-MM-DD_feature-name]/`
3. Move these session files from `pio/handoff/` to archive:
   `plan.md`, `review_plan.md`, `dev_log.md`, `review_code.md`,
   `test_plan.md`, `test_results.md`, `test_review.md`, `greenlight.md`
   (keep `README.md` and `*.template` files — they are part of the install)
4. Reset `pio/STATUS.md` to initial state
5. Tell user: "Session archived. PIO ready for next feature."

### `/pio:review`
1. Read `pio/roles/reviewer.md`
2. Read latest `pio/handoff/plan.md`
3. Analyze as Reviewer
4. **Show analysis on screen — do NOT write any file yet**
5. Format: ## Review Summary / ## Critical Issues / ## Minor Issues / ## Open Questions / ## Recommendation
6. Update `pio/STATUS.md` step: "plan review shown — awaiting /pio:accept"
7. Tell user: "Review complete. Discuss, then run `/pio:accept` to save."

### `/pio:accept`
1. Read `pio/STATUS.md` for current step
2. Save based on step:
   - plan review shown → `pio/handoff/review_plan.md`
   - code review shown → `pio/handoff/review_code.md`
   - test plan shown   → `pio/handoff/test_plan.md`
   - test review shown → `pio/handoff/test_review.md`
3. Update `pio/STATUS.md` step
4. Tell user: "Saved. Switch to the appropriate agent for the next command."

### `/pio:reviewcode`
1. Read `pio/roles/reviewer.md`
2. Read `pio/handoff/dev_log.md`
3. Read each file in the dev_log "Files Changed" section
4. **Show analysis on screen — do NOT write yet**
5. Look for: bugs, regressions, pattern violations, missing error handling
6. Update `pio/STATUS.md` step: "code review shown — awaiting /pio:accept"
7. Tell user: "Code review complete. Discuss, then run `/pio:accept`."

### `/pio:testplan`
1. Read `pio/roles/tester.md`
2. Read `pio/handoff/plan.md` + `pio/handoff/dev_log.md`
3. Generate: happy path, edge cases, error states, regressions
4. **Show on screen — do NOT write yet**
5. Update `pio/STATUS.md` step: "test plan shown — awaiting /pio:accept"
6. Tell user: "Test plan ready. Review, then run `/pio:accept` to save `test_plan.md`."

### `/pio:reviewtest`
1. Read `pio/handoff/test_results.md`
2. Classify: ✅ PASS / ❌ FAIL / ⚠️ REGRESSION
3. **Show analysis on screen — do NOT write yet**
4. Include: summary table, failure details, recommendation (READY TO SHIP / FIX REQUIRED)
5. Update `pio/STATUS.md` step: "test review shown — awaiting /pio:accept"
6. Tell user: "Test review complete. Discuss, then run `/pio:accept`."
<!-- PIO END -->

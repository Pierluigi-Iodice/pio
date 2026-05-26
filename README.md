# PIO — Project Integration Orchestration

[![npm version](https://img.shields.io/npm/v/pio-installer.svg)](https://www.npmjs.com/package/pio-installer)
[![license](https://img.shields.io/npm/l/pio-installer.svg)](./LICENSE)

> A lightweight, file-based multi-agent workflow for vibe coders who want to ship better software.

---

## The Problem

You're vibe coding. Claude writes 200 lines. It looks great. You ship it.

Three days later you find a regression nobody caught — including Claude.

Or worse: the architecture looked clean in the chat window, but when you look at the actual codebase it introduced a wrong pattern, a hidden coupling, a design smell that will cost you hours next week.

**The root cause:** you're asking the same AI that wrote the plan to review the plan. It has full context, full bias, and zero fresh perspective.

---

## The Solution

What if a second AI agent — with no memory of the first conversation — reviewed everything from scratch?

That's PIO. A structured handoff protocol that turns your existing AI CLI tools into a **multi-agent review loop**, with you as the PM who controls every step.

No framework. No cloud dependency. No autonomous agents running wild. Just `.md` files, slash commands, and a clear protocol.

---

## Results (Personal Experience)

> Working on complex industrial software projects (MES/MOM systems, multi-module SaaS platforms), this workflow produced roughly an **80% improvement in first-pass quality** — fewer regressions, fewer hidden bugs, fewer architectural mistakes reaching the codebase.

The mechanism is simple: two different AI perspectives, zero shared context, structured handoff. The second agent always finds things the first one missed.

---

## Install

```bash
npx pio-installer@latest
```

Run this in any project directory. PIO creates `./pio/` and merges `/pio:*` commands into `CLAUDE.md`, `CODEX.md`, and `GEMINI.md`.

---

## How It Works

PIO defines **3 phases**, each with assigned roles:

```
PHASE 1 — PLANNING
  Planner  → writes the plan
  Reviewer → critiques the plan
  loop until both green-light

PHASE 2 — DEVELOPMENT
  Coder    → implements from the approved plan
  Reviewer → audits the implementation
  loop until both green-light

PHASE 3 — QA & TESTING
  Tester   → defines and runs test scenarios
  Reviewer → validates results, flags regressions
  loop until both green-light
```

You assign roles to your agents. Example:

| Agent | Role |
|---|---|
| Claude Code | Planner + Coder |
| Codex | Reviewer + Tester |

---

## The PM is Always in Control

PIO is **semi-automated by design**. Every handoff requires your explicit command:

```
[Claude Code]  /pio:plan          → generates plan.md
[You]          read it, discuss
[Codex]        /pio:review        → reads plan.md, shows analysis on screen
[You]          discuss, accept or request changes
[Codex]        /pio:accept        → writes review_plan.md
[Claude Code]  /pio:applyreview   → reads review, updates plan
[Both]         /pio:greenlight    → planning approved → proceed to development
```

Nothing happens without your command. You are the PM.

---

## Commands

| Command | Who | What |
|---|---|---|
| `/pio:status` | Any | Current phase, pending action, green lights |
| `/pio:plan` | Planner | Discuss & write `handoff/plan.md` |
| `/pio:review` | Reviewer | Read plan, show analysis on screen |
| `/pio:accept` | Any | Save last analysis shown on screen to the correct `handoff/` file |
| `/pio:applyreview` | Planner | Apply review, update plan |
| `/pio:greenlight` | Any | Approve current phase |
| `/pio:develop` | Coder | Implement from `plan.md` or inline brief, write `dev_log.md` |
| `/pio:reviewcode` | Reviewer | Audit implementation |
| `/pio:fix` | Coder | Apply code review fixes |
| `/pio:testplan` | Tester | Generate test scenarios |
| `/pio:runtest` | Coder/Tester | Execute tests, write results |
| `/pio:reviewtest` | Reviewer | Classify PASS / FAIL / REGRESSION |
| `/pio:bugfix` | Coder | Fix test failures |
| `/pio:archive` | Any | Save session, reset for next feature |

---

## Why Not AutoGen / CrewAI / LangGraph?

Those are great frameworks for autonomous multi-agent pipelines. PIO is different:

| | AutoGen / CrewAI | PIO |
|---|---|---|
| Control | Autonomous | PM-controlled |
| Setup | Complex, cloud | `npx` one-liner |
| Client support | Framework-specific | Any CLI agent |
| Dependencies | Heavy | Zero |
| Transparency | Variable | All state in `.md` files |
| Risk | Agents act alone | Nothing without your command |

PIO is for developers who want **augmented intelligence**, not autonomous agents.

---

## Extending PIO

### Adding a new agent (e.g. Gemini CLI)

`GEMINI.md` is included out of the box. Assign it a role in `pio/STATUS.md` and you're done.

### Adapting for your project

The `roles/` files are plain markdown — edit them to match your stack:
- `roles/reviewer.md` — add project-specific patterns to check, anti-patterns to flag
- `roles/tester.md` — add your testing framework and coverage requirements
- `roles/coder.md` — add coding standards, preferred libraries

---

## File Structure After Install

```
your-project/
├── CLAUDE.md          ← /pio:* commands for Claude Code
├── CODEX.md           ← /pio:* commands for Codex
├── GEMINI.md          ← /pio:* commands for Gemini CLI
└── pio/
    ├── STATUS.md      ← your session control panel
    ├── COMMANDS.md    ← full command reference
    ├── QUICKSTART.md
    ├── HOW_IT_WORKS.md
    ├── roles/
    │   ├── planner.md
    │   ├── coder.md
    │   ├── reviewer.md
    │   └── tester.md
    ├── handoff/       ← active session files
    └── archive/       ← completed sessions
```

---

## Contributing

PRs welcome. Especially interested in:
- Role templates for specific domains (web, mobile, embedded, industrial)
- Adapter files for other CLI tools
- Workflow variants (e.g. lightweight 2-phase for small features)

---

## License

MIT — use it, fork it, adapt it.

---

*Built by a developer who got tired of catching the same bugs twice.*

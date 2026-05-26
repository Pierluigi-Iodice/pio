#!/usr/bin/env node

'use strict';

const fs   = require('fs');
const path = require('path');

// ─── CLI args ────────────────────────────────────────────────────────────────
const args    = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const FORCE   = args.includes('--force');
const HELP    = args.includes('--help');

// ─── Paths ────────────────────────────────────────────────────────────────────
const TARGET_DIR    = process.cwd();
const PIO_DIR       = path.join(TARGET_DIR, 'pio');
const TEMPLATES_DIR = path.join(__dirname, '..', 'templates');

// ─── Unicode / ANSI detection ─────────────────────────────────────────────────
// Windows Terminal sets WT_SESSION; legacy cmd/powershell does not.
const supportsUnicode = process.platform !== 'win32' || !!process.env.WT_SESSION;

// Status icons
const CHECK = supportsUnicode ? '✅' : '[OK]';
const WARN  = supportsUnicode ? '⚠️ ' : '[!!]';

// Box-drawing and punctuation — full ASCII fallback for legacy Windows consoles
const U = {
  tl:    supportsUnicode ? '╔' : '+',
  tr:    supportsUnicode ? '╗' : '+',
  bl:    supportsUnicode ? '╚' : '+',
  br:    supportsUnicode ? '╝' : '+',
  h:     supportsUnicode ? '═' : '=',
  v:     supportsUnicode ? '║' : '|',
  hline: supportsUnicode ? '─' : '-',
  arrow: '->',
};

// ─── ANSI color helpers (no external dependencies) ───────────────────────────
const c = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  green:  '\x1b[32m',
  yellow: '\x1b[33m',
  cyan:   '\x1b[36m',
  gray:   '\x1b[90m',
  red:    '\x1b[31m',
};

const green  = (s) => `${c.green}${s}${c.reset}`;
const yellow = (s) => `${c.yellow}${s}${c.reset}`;
const cyan   = (s) => `${c.cyan}${s}${c.reset}`;
const bold   = (s) => `${c.bold}${s}${c.reset}`;
const gray   = (s) => `${c.gray}${s}${c.reset}`;
const red    = (s) => `${c.red}${s}${c.reset}`;

// ─── Help ─────────────────────────────────────────────────────────────────────
if (HELP) {
  const sep = U.hline.repeat(54);
  console.log(`
${bold('PIO -- Project Integration Orchestration')}

${bold('Usage:')}
  npx pio-installer            Install PIO into the current directory
  npx pio-installer --force    Overwrite existing PIO installation
  npx pio-installer --dry-run  Show what would happen without touching anything
  npx pio-installer --help     Show this help

${bold('What it creates:')}
  ./pio/                    Status, roles, handoff templates, archive
  ./.claude/commands/pio/   Native /pio:* slash commands for Claude Code
  ./.codex/skills/pio-*/    Native /prompts:pio-* skills for Codex
  ./AGENTS.md               Codex agent instructions (created only if missing)

${bold('Non-destructive:')}
  PIO does not modify CLAUDE.md, CODEX.md, GEMINI.md or any other
  existing project file. Only files inside ./pio/, ./.claude/commands/pio/,
  ./.codex/skills/pio-*/ and AGENTS.md are touched.

${gray(sep)}
`);
  process.exit(0);
}

// ─── Log helpers ──────────────────────────────────────────────────────────────
const log = {
  created: (r) => console.log(`  ${green(CHECK)} Created: ${cyan(r)}`),
  skipped: (r) => console.log(`  ${yellow(WARN)} Skipped: ${cyan(r)}  ${gray('(already exists -- use --force to overwrite)')}`),
  dry:     (r) => console.log(`  ${gray('[dry]')}    ${cyan(r)}`),
  warn:    (m) => console.log(`  ${yellow(WARN)} ${m}`),
  err:     (m) => console.log(`  ${red('[ERR]')} ${m}`),
};

function relPath(absPath) {
  return `.${path.sep}${path.relative(TARGET_DIR, absPath)}`;
}

// ─── Core utilities ───────────────────────────────────────────────────────────
function createDir(dirPath) {
  if (DRY_RUN) {
    log.dry(`${relPath(dirPath)}${path.sep}`);
    return;
  }
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    log.created(`${relPath(dirPath)}${path.sep}`);
  }
}

function copyFile(src, dest) {
  const r = relPath(dest);
  if (DRY_RUN) {
    log.dry(r);
    return;
  }
  if (fs.existsSync(dest) && !FORCE) {
    log.skipped(r);
    return;
  }
  fs.copyFileSync(src, dest);
  log.created(r);
}

// ─── Installer ────────────────────────────────────────────────────────────────
function installPio() {

  // Guard: already installed without --force.
  // Applies to both real runs and --dry-run: dry-run simulates the same outcome.
  if (!FORCE && fs.existsSync(PIO_DIR)) {
    if (DRY_RUN) {
      console.log(`\n${gray('[dry]')} PIO is already installed here.`);
      console.log(`       Without ${bold('--force')}, nothing would be done.\n`);
    } else {
      console.log(`\n${yellow(WARN)} PIO is already installed in this directory.`);
      console.log(`    Run with ${bold('--force')} to overwrite the existing installation.\n`);
    }
    process.exit(0);
  }

  if (DRY_RUN) {
    console.log(`\n${bold(cyan('PIO -- dry run'))} ${gray('(nothing will be written)')}\n`);
  } else {
    console.log(`\n${bold('Installing PIO...')}\n`);
  }

  // 1 -- pio/ directory structure
  createDir(PIO_DIR);
  createDir(path.join(PIO_DIR, 'roles'));
  createDir(path.join(PIO_DIR, 'handoff'));
  createDir(path.join(PIO_DIR, 'archive'));

  // 2 -- pio/ content files
  for (const file of ['STATUS.md', 'COMMANDS.md', 'HOW_IT_WORKS.md', 'QUICKSTART.md']) {
    copyFile(
      path.join(TEMPLATES_DIR, file),
      path.join(PIO_DIR, file)
    );
  }

  // 3 -- roles/
  for (const role of ['planner.md', 'coder.md', 'reviewer.md', 'tester.md']) {
    copyFile(
      path.join(TEMPLATES_DIR, 'roles', role),
      path.join(PIO_DIR, 'roles', role)
    );
  }

  // 4 -- handoff/ templates
  for (const file of [
    'README.md',
    'plan.md.template',
    'dev_log.md.template',
    'test_plan.md.template',
    'test_results.md.template',
    'greenlight.md.template',
  ]) {
    copyFile(
      path.join(TEMPLATES_DIR, 'handoff', file),
      path.join(PIO_DIR, 'handoff', file)
    );
  }

  // 5 -- archive/README.md
  copyFile(
    path.join(TEMPLATES_DIR, 'archive', 'README.md'),
    path.join(PIO_DIR, 'archive', 'README.md')
  );

  // 6 -- AGENTS.md (Codex context — created only if missing, never merged into existing)
  copyFile(
    path.join(TEMPLATES_DIR, 'AGENTS.md'),
    path.join(TARGET_DIR, 'AGENTS.md')
  );

  // 7 -- Claude Code slash commands (.claude/commands/pio/)
  const CLAUDE_COMMANDS_DIR = path.join(TARGET_DIR, '.claude', 'commands', 'pio');
  createDir(path.join(TARGET_DIR, '.claude'));
  createDir(path.join(TARGET_DIR, '.claude', 'commands'));
  createDir(CLAUDE_COMMANDS_DIR);
  for (const cmd of [
    'status.md', 'plan.md', 'review.md', 'accept.md', 'applyreview.md',
    'greenlight.md', 'develop.md', 'reviewcode.md', 'fix.md',
    'testplan.md', 'runtest.md', 'reviewtest.md', 'bugfix.md', 'archive.md',
  ]) {
    copyFile(
      path.join(TEMPLATES_DIR, 'commands', 'pio', cmd),
      path.join(CLAUDE_COMMANDS_DIR, cmd)
    );
  }

  // 8 -- Codex skills (.codex/skills/pio-*/)
  const CODEX_SKILLS_BASE = path.join(TARGET_DIR, '.codex', 'skills');
  createDir(path.join(TARGET_DIR, '.codex'));
  createDir(CODEX_SKILLS_BASE);
  for (const skill of [
    'pio-status', 'pio-plan', 'pio-review', 'pio-accept', 'pio-applyreview',
    'pio-greenlight', 'pio-develop', 'pio-reviewcode', 'pio-fix',
    'pio-testplan', 'pio-runtest', 'pio-reviewtest', 'pio-bugfix', 'pio-archive',
  ]) {
    createDir(path.join(CODEX_SKILLS_BASE, skill));
    copyFile(
      path.join(TEMPLATES_DIR, 'codex-skills', skill, 'SKILL.md'),
      path.join(CODEX_SKILLS_BASE, skill, 'SKILL.md')
    );
  }

  // 9 -- done
  if (DRY_RUN) {
    const sep = gray(U.hline.repeat(54));
    console.log(`\n${sep}`);
    console.log(`${gray('Dry run complete. Run without --dry-run to apply.')}\n`);
  } else {
    printSuccess();
  }
}

// ─── Post-install output ──────────────────────────────────────────────────────
function printSuccess() {
  const W    = 56;
  const sep  = gray(U.hline.repeat(W));
  const top  = green(U.tl + U.h.repeat(W) + U.tr);
  const mid  = green(U.v);
  const bot  = green(U.bl + U.h.repeat(W) + U.br);
  const arr  = U.arrow;

  const titleLine  = 'PIO -- Project Integration Orchestration';
  const statusLine = 'installed successfully';
  const padTitle  = ' '.repeat(Math.floor((W - titleLine.length)  / 2));
  const padStatus = ' '.repeat(Math.floor((W - statusLine.length) / 2));

  console.log(`
${top}
${mid}${padTitle}${bold(titleLine)}${padTitle} ${mid}
${mid}${padStatus}${green(statusLine)}${padStatus}  ${mid}
${bot}

${bold('Next steps:')}

  1. Edit ${cyan('pio' + path.sep + 'STATUS.md')} ${arr} assign roles to your agents
  2. Claude Code: ${bold(cyan('/pio:status'))}  ${gray('|')}  Codex: ${bold(cyan('/prompts:pio-status'))}
  3. To start planning:
     Claude Code: ${bold(cyan('/pio:plan'))}  ${gray('|')}  Codex: ${bold(cyan('/prompts:pio-plan'))}

${sep}
  ${gray('Full docs:        ')} ${cyan('pio' + path.sep + 'QUICKSTART.md')}
  ${gray('Command reference:')} ${cyan('pio' + path.sep + 'COMMANDS.md')}
  ${gray('How it works:     ')} ${cyan('pio' + path.sep + 'HOW_IT_WORKS.md')}
${sep}
`);
}

// ─── Run ──────────────────────────────────────────────────────────────────────
installPio();

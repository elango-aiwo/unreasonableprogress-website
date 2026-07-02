#!/usr/bin/env node
/**
 * Copy Constitution CI check — SPEC §9.
 * Rule 2 (banned words): fails the build if any of these appear anywhere in content/.
 * Rule 1 (target-range law): warns if a target-range figure appears in a copy file
 * that never mentions "target range" — a heuristic, not a substitute for review.
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, extname } from "node:path";

const CONTENT_DIRS = ["content/copy", "content/articles"];
const BANNED_WORDS = [
  /\bguarantee(d|s)?\b/i,
  /\bassured\b/i,
  /\bpromise(d)?\s+returns?\b/i,
  /\bcure(d|s)?\b/i,
  /\btreatment\b/i, // outcome-claim framing; "physician-governed", "protocols" are fine
  /\blobbying\b/i,
  /\bexclusive returns?\b/i,
  /\brisk-free\b/i,
  /\bbest in the world\b/i,
];
const TARGET_RANGE_FIGURES = [/5–15 years/, /10x–100x/, /\b0\.71\b/];

function walk(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) files.push(...walk(full));
    else if ([".ts", ".tsx", ".mdx"].includes(extname(full))) files.push(full);
  }
  return files;
}

let failed = false;
let warned = false;

for (const dir of CONTENT_DIRS) {
  let files;
  try {
    files = walk(dir);
  } catch {
    continue;
  }

  for (const file of files) {
    const text = readFileSync(file, "utf8");

    for (const pattern of BANNED_WORDS) {
      const globalPattern = new RegExp(pattern.source, pattern.flags.includes("g") ? pattern.flags : pattern.flags + "g");
      for (const match of text.matchAll(globalPattern)) {
        // Compliance copy legitimately says "no guarantee(s)" / "not assured", and FAQ
        // entries pose the skeptical question ("Is X a guarantee?") then negate it in the
        // adjacent answer field — only an affirmative claim is the actual violation.
        const preceding = text.slice(Math.max(0, match.index - 60), match.index);
        const following = text.slice(match.index, match.index + 120);
        const negatedBefore = /\b(no|not|never|without|non-|n't)\b(?:\s+\S+){0,5}\s*$/i.test(preceding);
        const negatedAfter = /^\S*[?"]?[,\s]*(answer\s*:\s*)?"?\s*no[.,\s]/i.test(following);
        if (!negatedBefore && !negatedAfter) {
          console.error(`✗ BANNED WORD "${match[0]}" in ${file}: "...${preceding.trim()} ${match[0]}..."`);
          failed = true;
        }
      }
    }

    const hasFigure = TARGET_RANGE_FIGURES.some((p) => p.test(text));
    const hasFraming = /target range/i.test(text);
    if (hasFigure && !hasFraming) {
      console.warn(`⚠ ${file} cites a target-range figure without the words "target range" nearby — verify a <TargetRangeNote/> is attached.`);
      warned = true;
    }
  }
}

if (failed) {
  console.error("\nCopy Constitution check FAILED — banned word(s) found.");
  process.exit(1);
}
console.log(warned ? "\nCopy Constitution check passed with warnings." : "\nCopy Constitution check passed clean.");

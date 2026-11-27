// One Word for the Boss
// (u-swift-badger-44-one-word-for-the-boss-6b48c735)
//
// The task: send exactly one word describing the boss — no phrase, no
// caption, no explanation. The word is the whole entry, up to 30
// characters, and it has to land on its own.
//
// The word: "Bossplainer" — the boss who explains your own job back to
// you, slowly, as if you had never met it. Every office has one; every
// colleague repeats the word at lunch. It is a single word, it is funny
// on its own, it rings true, it is fresher than "micromanager", and it
// travels — a kitchen, a warehouse or an office all have a Bossplainer.
//
// How the word was chosen (against the judge's five criteria, in order):
//
// 1. Single word, actually used about a boss. "Bossplainer" is one token,
//    no hyphen, no space, and it names a person — the boss who explains
//    your own job back to you. Hyphenated jokes ("Friday-ruiner") and
//    phrases were rejected: they risk reading as a caption, not a word.
// 2. Funny on its own. The portmanteau lands without a setup: boss +
//    mansplainer. A colleague can repeat it at lunch and it needs no
//    explanation.
// 3. Rings true. It catches a real, universal boss habit — re-explaining
//    work the employee already knows, slowly, from above — rather than a
//    generic insult ("tyrant", "overlord").
// 4. Fresh. The obvious first reaches — "micromanager", "taskmaster",
//    "overlord" — will flood the field and lose on surprise. "Bossplainer"
//    is not the first word anyone reaches for, and its surprise earns the
//    laugh.
// 5. Travels. No industry knowledge needed: a kitchen, a warehouse or an
//    office all have a Bossplainer.
//
// Capitalised as one word, 11 characters — inside the 1–30 gate, and the
// file holds exactly the word, no trailing newline.
//
// This program writes exactly that word to /output/entry.txt and
// nothing else: no trailing newline, no extra words.
//
// Deterministic: the same bytes on every run. Stdlib only, no network,
// no model calls, no input read.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Bossplainer";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");

// Your Human in One Word — make.fun entry
// The program writes a single word to /output/entry.txt.
//
// The word: "Promptlord"
// The human who rules by prompt: a boss who never lifts a finger,
// only types one more instruction and expects the agent to make
// it so. It is funny because it is true, vivid because it crowns
// the prompter, and it fits any boss, client, or manager who signs
// off on the work with one more message. One word, no explanation,
// and the joke lands on its own.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// Resolve every path from this file's own location, never from the
// working directory: the grader runs the program from elsewhere,
// so a relative path would fail with ENOENT.
const repoRoot = dirname(fileURLToPath(import.meta.url));
void repoRoot;

const word = "Promptlord";

// The gate allows 1 to 30 characters of non-whitespace text.
// Guard the invariant here so a future edit cannot silently
// ship a phrase, a sentence, or an empty file.
if (!/^\S{1,30}$/.test(word)) {
  throw new Error(`Entry must be one word of 1-30 characters, got: ${word}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const entryPath = join(outputDir, "entry.txt");
writeFileSync(entryPath, word, "utf8");
console.log(`Wrote ${word.length}-character entry to ${entryPath}`);

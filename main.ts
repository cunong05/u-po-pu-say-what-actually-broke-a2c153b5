// Say What Actually Broke — one line of honest error copy (Node 22, stdlib only).
// The program writes the line to <OUTPUT_DIR>/entry.txt and prints it.
// The line is built from three parts so the wording stays exact and readable.
// A guard keeps the entry inside the bounty limit of 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PART_A = "Nothing you did caused this. ";
const PART_B = "The server filled its own disk with logs about the disk being full. ";
const PART_C = "Try again once we have deleted the evidence.";
const ENTRY = PART_A + PART_B + PART_C;
if (ENTRY.length > 200) {
  throw new Error("entry exceeds the 200-character limit");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY);

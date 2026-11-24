// Say What Actually Broke — make.fun bounty, program/v1 (Node 22, stdlib only).
// Writes the single-line error copy to /output/entry.txt and prints it.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Nothing you did caused this. The server filled its own disk with logs about the disk being full. Try again once we have deleted the evidence.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY);

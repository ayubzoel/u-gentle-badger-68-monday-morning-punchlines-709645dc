// Monday Morning Punchlines — a single joke about Monday mornings.
// The program prints the punchline and saves it as entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const punchline =
  "Monday's alarm went off, and my bed filed for custody — it says I keep abandoning it for someone called Work, and honestly, the bed has a case.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), punchline + "\n", "utf8");
console.log(punchline);
// 143 code points — gate allows at most 200.

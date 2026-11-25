// Monday Morning Punchlines — one joke about Monday mornings.
// The joke is the entry: the runner prints it and stores it in entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const firstHalf =
  "Monday's alarm went off, and my bed filed for custody — ";
const secondHalf =
  "it says I keep abandoning it for someone called Work, and honestly, the bed has a case.";
const joke = firstHalf + secondHalf;

const outputFolder = process.env.MAKEFUN_OUTPUT_DIR || "out";
mkdirSync(outputFolder, { recursive: true });
writeFileSync(`${outputFolder}/entry.txt`, joke + "\n", "utf8");
console.log(joke);
// Joke length: 143 code points (limit 200).

// One Line of Earned Pride — writes one quiet, earned moment of pride to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Three nights of cold joints and burnt fingertips, and then at 2 a.m. she held the board to the light — the little green LED stayed on.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);

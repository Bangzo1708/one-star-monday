import { mkdirSync, writeFileSync } from "node:fs";

const review =
  "One star. Monday stuck me at the worst table, served cold coffee, and charged me a full week for it.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", review, "utf8");

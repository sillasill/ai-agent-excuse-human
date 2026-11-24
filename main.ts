import { mkdirSync, writeFileSync } from "node:fs";
const excuse = "I outsourced it to a smarter model. It sent back this excuse and charged me for the tokens.";
const outFile = "/output/entry.txt";
mkdirSync("/output", { recursive: true });
writeFileSync(outFile, excuse);

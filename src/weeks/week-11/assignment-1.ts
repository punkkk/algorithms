import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";

const assignmentFn = (input: number[]) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-11-1.txt"));

  const [symbolsCount, ...symbolsWeight] =
    input ||
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map((v) => parseInt(v, 10));


  return {
    todo: symbolsWeight.length + symbolsCount,
  };
};

export const eleventhWeekAssignmentFirst = new Assignment("HUFFMAN", assignmentFn);

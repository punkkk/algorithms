import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {HeapHigh} from "./heap-high";
import {HeapLow} from "./heap-low";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-6.txt"));

  const numbers = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map(Number);

  () => numbers;

  const heapHigh = new HeapHigh();
  const heapLow = new HeapLow();

  return {
    heapHigh,
    heapLow,
  };
};

export const seventhWeekAssignment = new Assignment("Median maintenance", assignmentFn);

import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";

const assignmentFn = (testNumbers?: number[], t1: number = -10000, t2: number = 10000) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-8.txt"));

  const numbers = new Set(
    testNumbers ||
      assignmentFile
        .toString()
        .split("\n")
        .filter((e) => e !== "")
        .map(Number),
  );
  () => numbers;

  let count = 0;

  for (let t = t1; t <= t2; t += 1) {
    for (const n of numbers) {
      if (numbers.has(t - n)) {
        count += 1;
        numbers.delete(t - n);
        numbers.delete(n);
        break;
      }
    }
  }

  return count;
};

export const eighthWeekAssignment = new Assignment("2-SUM", assignmentFn);

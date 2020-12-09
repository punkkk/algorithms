import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-8.txt"));

  const numbers = new Set(
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map(Number),
  );
  () => numbers;

  // const numberss = new Set([-3, -1, 1, 2, 9, 11, 7, 6, 2]);

  let count = 0;
  for (let t = -10000; t <= 10000; t += 1) {
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

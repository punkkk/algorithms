import fs from "fs";
import * as path from "path";

import { Assignment } from "../utils";

const assignmentFn = (input: number[]) => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-11-2.txt"));

  const [verticesCount, ...verticesWeight] =
    input ||
    assignmentFile
      .toString()
      .split("\n")
      .filter((e) => e !== "")
      .map((v) => parseInt(v, 10));

  const A = new Array(verticesCount + 1).fill(0);
  A[1] = verticesWeight[0];

  for (let i = 2; i < A.length; i += 1) {
    A[i] = Math.max(A[i - 1], A[i - 2] + verticesWeight[i - 1]);
  }

  const maxWeightIndependentSet = new Set();

  for (let i = A.length - 1; i > 0; ) {
    if (A[i - 1] >= A[i - 2] + verticesWeight[i - 1]) {
      i -= 1;
    } else {
      maxWeightIndependentSet.add(i - 1);
      i -= 2;
    }
  }

  return {
    bitmap: [1, 2, 3, 4, 17, 117, 517, 997].map((v) => (maxWeightIndependentSet.has(v - 1) ? 1 : 0)).join(""),
  };
};

export const eleventhWeekAssignmentSecond = new Assignment("Maximum-weight independent set", assignmentFn);

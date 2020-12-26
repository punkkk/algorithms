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

  // not in use just to get rid of vertices[i - 1] thing
  verticesWeight.unshift(0);

  const A = new Array(verticesCount).fill(0);
  A[1] = verticesWeight[1];

  for (let i = 2; i < A.length; i += 1) {
    A[i] = Math.max(A[i - 1], A[i - 2] + verticesWeight[i]);
  }
  const set = new Set();

  for (let i = A.length - 1; i > 0; ) {
    if (A[i - 1] >= A[i - 2] + verticesWeight[i]) {
      i -= 1;
    } else {
      set.add(i);
      i -= 2;
    }
  }

  return {
    bitmap: new Array(verticesCount).fill(0).map((v, i) => (set.has(i) ? 1 : 0)),
  };
};

export const eleventhWeekAssignmentSecond = new Assignment("HUFFMAN", assignmentFn);

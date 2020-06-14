// import fs from "fs";
// import * as path from "path";

import {Assignment} from "../utils";
import {RandomContraction} from "./random-contraction";

const assignmentFn = () => {
  // const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-4.txt"));

  // const vertices = assignmentFile
  //   .toString()
  //   .split("\n")
  //   .filter((e) => e !== "")
  //   .map((str) =>
  //     str
  //       .split("\t")
  //       .filter((e) => e !== "")
  //       .map(Number),
  //   )
  //   .reduce((map, [vertex, ...edgesTo]) => map.set(vertex, edgesTo), new Map());

  const contraction = new RandomContraction(
    new Map([
      [0, [1, 3]],
      [1, [0, 2, 3]],
      [2, [1, 3]],
      [3, [0, 1, 2]],
    ]),
  );

  return contraction.getCut();
};

export const fourthWeekAssignment = new Assignment("KRAGER'S MIN CUT", assignmentFn);

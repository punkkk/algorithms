import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {RandomContraction} from "./random-contraction";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-4.txt"));

  const vertices = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((str) =>
      str
        .split("\t")
        .filter((e) => e !== "")
        .map(Number),
    )
    .reduce((map, [vertex, ...edgesTo]) => map.set(vertex, edgesTo), new Map());

  const lengths = [];
  for (let i = 0; i < vertices.size; i++) {
    const contraction = new RandomContraction(new Map(vertices));
    const cut = contraction.getCut();
    lengths.push(Array.from(cut.values())[0].length);
  }

  return Math.min(...lengths);
};

export const fourthWeekAssignment = new Assignment("KRAGER'S MIN CUT", assignmentFn);

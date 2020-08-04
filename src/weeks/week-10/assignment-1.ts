import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {Edge} from "./edge";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-10-1.txt"));

  const [nodeCount, ...edges] = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((v, i) => (i === 0 ? v : Edge.fromRaw(v.split(" "))));

  return {
    count: nodeCount,
    edgeDescriptions: edges[0],
  };
};

export const tenthWeekAssignmentFirst = new Assignment("CLUSTERING", assignmentFn);

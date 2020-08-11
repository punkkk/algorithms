import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/test.txt"));

  const [meta, ...edges] = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((v, i) => (i === 0 ? v : parseInt(v.replace(/ /g, ""), 2)));
  const [rowsCount, sizeOfRow] = (meta as string).split(" ");

  return {
    rowsCount,
    sizeOfRow,
    edge: edges[0],
  };
};

export const tenthWeekAssignmentSecond = new Assignment("CLUSTERING BIG", assignmentFn);

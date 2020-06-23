// import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {Edge} from "./edge";
import {Dijkstra} from "./dijkstra";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-6.txt"));

  const adjacencyList = assignmentFile
    .toString()
    .split("\n")
    .filter((e) => e !== "")
    .map((str) => str.split("\t").filter((e) => e !== ""))
    .reduce((map, [vertex, ...edgesTo]) => map.set(Number(vertex), edgesTo.map(Edge.fromRaw)), new Map());

  () => adjacencyList;

  const dijkstra = new Dijkstra();

  return [7, 37, 59, 82, 99, 115, 133, 165, 188, 197]
    .map((v) => dijkstra.findShortestDistance(adjacencyList, 1, v)!)
    .join(",");
};

export const sixthWeekAssignment = new Assignment("Dijkstra algorithm", assignmentFn);

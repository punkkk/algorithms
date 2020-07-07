import _ from "lodash";
import fs from "fs";
import * as path from "path";

import {Assignment} from "../utils";
import {Edge} from "./edge";
import {Heap} from "./heap";

const assignmentFn = () => {
  const assignmentFile = fs.readFileSync(path.join(__dirname, "../../misc/assignment-9-2.txt"));
  const adjacentList: Map<number, Edge[]> = new Map(
    Object.entries(
      _.mapValues(
        _.groupBy(
          assignmentFile
            .toString()
            .split("\n")
            .filter((e) => e !== "")
            .map((str) => {
              return str.split(" ");
            }),
          (strArr) => strArr[0],
        ),
        // tslint:disable-next-line:no-shadowed-variable
        (edges) => edges.map((edge) => Edge.fromRaw(_.takeRight(edge, 2))),
      ),
    ),
  ) as any;

  // const adjacentList = new Map([
  //   [1, [new Edge(1, 2), new Edge(4, 3), new Edge(3, 4)]],
  //   [2, [new Edge(1, 1), new Edge(2, 4)]],
  //   [3, [new Edge(4, 1), new Edge(5, 4)]],
  //   [4, [new Edge(3, 1), new Edge(2, 2), new Edge(5, 3)]],
  // ]);
  const edges = new Heap();
  const vertices = Array.from(adjacentList.keys());
  const startVertex = vertices[0];
  const passedVertices = new Set([startVertex]);
  const minimumSpanningTreeEdges = [];

  edges.insertMany(adjacentList.get(startVertex)!);

  for (; edges.getSize() > 0; ) {
    const minEdge = edges.extractMin()!;

    if (passedVertices.has(minEdge.targetVertex)) {
      continue;
    }

    passedVertices.add(minEdge.targetVertex);
    edges.insertMany(adjacentList.get(minEdge.targetVertex)! || []);
    minimumSpanningTreeEdges.push(minEdge);
  }

  return minimumSpanningTreeEdges.reduce((acc, edge) => acc + edge.weight, 0);
};

export const ninthWeekAssignmentSecond = new Assignment("PRIM ALGORITHM", assignmentFn);

import _ from "lodash";
import {Edge} from "./edge";

export class Dijkstra {
  private passedVertices: Set<number> = new Set();

  findShortestDistance(graph: Map<number, Edge[]>, from: number, to: number) {
    this.passedVertices = new Set<number>([from]);
    let edges = graph.get(from)!;
    let distance = 0;

    edges.forEach((e) => (e.distance = distance + e.weight));

    while (this.passedVertices.size <= graph.size) {
      if (edges.length === 0) {
        return 1000000;
      }

      const minDistanceEdge = _.minBy(edges, (e: Edge) => e.distance)!;

      distance = minDistanceEdge.distance;

      if (minDistanceEdge.targetVertex === to) {
        return distance;
      } else {
        this.passedVertices.add(minDistanceEdge.targetVertex);
        const targetVertexEdges = graph.get(minDistanceEdge.targetVertex)!;

        targetVertexEdges.forEach((e) => (e.distance = distance + e.weight));

        edges = edges
          .concat(targetVertexEdges)
          .filter((e) => e.targetVertex !== minDistanceEdge.targetVertex && !this.passedVertices.has(e.targetVertex));
      }
    }
  }
}

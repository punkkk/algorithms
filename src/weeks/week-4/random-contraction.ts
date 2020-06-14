import _ from "lodash";

export class RandomContraction {
  constructor(private vertices: Map<number, number[]>) {}

  deleteRandomEdge() {
    const verticesLabels = Array.from(this.vertices.keys());
    const vertex = verticesLabels[_.random(0, verticesLabels.length - 1)];

    const adjacentVertices = this.vertices.get(vertex)!;
    const vertexToMerge = adjacentVertices[_.random(0, adjacentVertices.length - 1)];
    const verticesToDeleteMergedEdge = this.vertices.get(vertexToMerge)!;

    const newEdges = adjacentVertices
      .filter((adjacentVertex) => adjacentVertex !== vertexToMerge)
      .concat(verticesToDeleteMergedEdge!.filter((adjacentVertex) => adjacentVertex !== vertex));

    for (const vertexToClean of verticesToDeleteMergedEdge) {
      this.vertices.set(
        vertexToClean,
        this.vertices
          .get(vertexToClean)!
          .map((adjacentVertex) => (adjacentVertex === vertexToMerge ? vertex : adjacentVertex)),
      );
    }

    this.vertices.delete(vertexToMerge);
    this.vertices.set(vertex, newEdges);
  }

  getCut(): Map<number, number[]> {
    for (; this.vertices.size > 2; ) {
      this.deleteRandomEdge();
    }

    return this.vertices;
  }
}

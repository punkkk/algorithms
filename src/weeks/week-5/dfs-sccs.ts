export class DfsSccs {
  // private finishingTime: number;
  // private currentVertex: number | null = null;
  // private vertexToFinishingTime: Map<number, number>;
  // private exploredVertices: Set<number>;
  // private topFiveSizes: number[];
  // private vertices: Map<number, number[]>;
  private reversedVertices: Map<number, number[]>;

  constructor(vertices: Map<number, number[]>) {
    // this.vertices = vertices;
    this.reversedVertices = this.reverseVertices(new Map(vertices));
  }

  getReversed() {
    return this.reversedVertices;
  }

  reverseVertices(vertices: Map<number, number[]>) {
    const passedVertices = new Map();

    for (const vertex of vertices.keys()) {
      const vertexEdges = vertices.get(vertex)!;

      for (const targetVertex of vertexEdges) {
        const targetVertexEdges = vertices.get(targetVertex)!;

        const passed = passedVertices.get(targetVertex);
        if (!passed || !passed.has(vertex)) {
          vertices.set(targetVertex, [...targetVertexEdges, vertex]);

          vertices.set(
            vertex,
            vertices.get(vertex)!.filter((v: number) => v !== targetVertex),
          );
        }
      }

      passedVertices.set(vertex, new Set(vertexEdges));
    }

    return vertices;
  }
  //
  // dfs(grapth, vertex) {}
  // calculateTopFiveOfSccs() {}
}

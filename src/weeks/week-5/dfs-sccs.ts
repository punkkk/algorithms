import _ from "lodash";

export class DfsSccs {
  private finishingTime: number = 0;
  private leaderNode: number | null = null;
  private vertexToFinishingTime: Map<number, number> = new Map();
  private exploredVertices: Set<number> = new Set();
  private vertexToLeaderNode: Map<number, number> = new Map();
  private vertices: Map<number, number[]>;
  private reversedVertices: Map<number, number[]>;
  private sizeOfComponent: number = 0;
  private componentSizes: number[] = [];
  private n: number;

  constructor(vertices: Map<number, number[]>) {
    this.vertices = vertices;
    this.reversedVertices = this.reverseVertices(new Map(vertices));
    this.n = vertices.size;
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

  dfsLoop(graph: Map<number, number[]>) {
    this.finishingTime = 0;
    this.leaderNode = null;
    this.componentSizes = [];
    this.exploredVertices.clear();
    this.vertexToLeaderNode.clear();

    for (let i = this.n; i > 0; i -= 1) {
      if (!this.exploredVertices.has(i)) {
        this.sizeOfComponent = 0;
        this.leaderNode = i;
        this.dfs(graph, i);

        this.componentSizes.push(this.sizeOfComponent);
      }
    }
  }

  dfs(graph: Map<number, number[]>, vertex: number) {
    const stack = [vertex];

    for (; stack.length > 0; ) {
      const v = stack[0];
      const edges = graph.get(v)!;

      if (this.exploredVertices.has(v) && edges.every((e) => this.exploredVertices.has(e))) {
        this.exit(v);
        stack.shift();

        continue;
      }

      this.enter(v);
      for (const targetVertex of edges) {
        if (!this.exploredVertices.has(targetVertex)) {
          stack.unshift(targetVertex);
          break;
        }
      }
    }
  }
  enter(vertex: number) {
    this.exploredVertices.add(vertex);
    this.vertexToLeaderNode.set(vertex, this.leaderNode!);
  }

  exit(vertex: number) {
    this.sizeOfComponent += 1;
    this.finishingTime += 1;
    this.vertexToFinishingTime.set(vertex, this.finishingTime);
  }

  calculateTopFiveOfSccs() {
    this.dfsLoop(this.reversedVertices);

    // yeah, a lot of memory, i know
    const vertices = new Map(this.vertices);

    for (const [vertex, vertexEdges] of vertices) {
      this.vertices.set(
        this.vertexToFinishingTime.get(vertex)!,
        vertexEdges.map((v) => this.vertexToFinishingTime.get(v)!),
      );
    }

    this.dfsLoop(this.vertices);

    return _.take(
      this.componentSizes.sort((a, b) => b - a),
      5,
    );
  }
}

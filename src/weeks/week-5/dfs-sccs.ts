import _ from "lodash";

export class DfsSccs {
  private finishingTime: number = 0;
  private leaderNode: number | null = null;
  private vertexToFinishingTime: Map<number, number> = new Map();
  private exploredVertices: Set<number> = new Set();
  private vertexToLeaderNode: Map<number, number> = new Map();
  private vertices: Map<number, number[]>;
  private reversedVertices: Map<number, number[]>;
  private n: number;

  constructor(vertices: Map<number, number[]>, reversedVertices: Map<number, number[]>) {
    this.vertices = vertices;
    this.reversedVertices = reversedVertices;
    this.n = vertices.size;
  }

  dfsLoop(graph: Map<number, number[]>) {
    this.finishingTime = 0;
    this.leaderNode = null;
    this.exploredVertices.clear();
    this.vertexToLeaderNode.clear();

    for (let i = this.n; i > 0; i -= 1) {
      if (!this.exploredVertices.has(i)) {
        this.leaderNode = i;
        this.dfs(graph, i);
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
      // this.componentSizes.sort((a, b) => b - a),
      Object.values(_.countBy(Array.from(this.vertexToLeaderNode.entries()), ([key, value]) => value)).sort(
        (a, b) => b - a,
      ),
      5,
    );
  }
}

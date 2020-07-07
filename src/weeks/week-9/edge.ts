export class Edge {
  static fromRaw(edgeArray: string[]) {
    return new Edge(parseInt(edgeArray[1], 10), parseInt(edgeArray[0], 10));
  }

  constructor(public weight: number, public targetVertex: number) {
    this.weight = weight;
    this.targetVertex = targetVertex;
  }
}

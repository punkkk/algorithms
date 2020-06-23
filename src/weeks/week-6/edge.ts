export class Edge {
  static fromRaw(edgeString: string) {
    const [targetVertex, weight] = edgeString.split(",");

    return new Edge(parseInt(weight, 10), parseInt(targetVertex, 10));
  }
  public distance: number = Number.POSITIVE_INFINITY;

  constructor(public weight: number, public targetVertex: number) {
    this.weight = weight;
    this.targetVertex = targetVertex;
  }
}

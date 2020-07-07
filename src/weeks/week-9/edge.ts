export class Edge {
  static fromRaw(edgeArray: string[]) {
    return new Edge(parseInt(edgeArray[1], 10), edgeArray[0]);
  }

  constructor(public weight: number, public targetVertex: string) {}
}

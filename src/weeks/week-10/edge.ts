export class Edge {
  static fromRaw(edgeArray: string[]) {
    return new Edge(parseInt(edgeArray[0], 10), parseInt(edgeArray[1], 10), parseInt(edgeArray[2], 10));
  }

  constructor(public source: number, public target: number, public weight: number) {}
}

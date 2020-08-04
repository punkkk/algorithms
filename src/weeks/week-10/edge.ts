export class Edge {
  static fromRaw(edgeArray: string[]) {
    return new Edge(edgeArray[0], edgeArray[1], parseInt(edgeArray[2], 10));
  }

  constructor(public source: string, public target: string, public weight: number) {}
}

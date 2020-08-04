export class UnionFind {
  private nodesParents: Map<number, number> = new Map();
  private nodesChildren: Map<number, Set<number>> = new Map();
  private clustersCount: number;

  constructor(size: number) {
    this.clustersCount = size;

    for (let i = 1; i <= size; i++) {
      this.nodesParents.set(i, -1);
      this.nodesChildren.set(i, new Set());
    }
  }

  public union(vertex: number, withVertex: number) {
    const vertexParent = this.nodesParents.get(vertex)!;
    const withVertexParent = this.nodesParents.get(withVertex)!;

    if (vertexParent === -1 && withVertexParent === -1) {
      return this.unionVertices(vertex, withVertex);
    }

    if (vertexParent === withVertex || withVertexParent === vertex) {
      return;
    }

    if (vertexParent === -1) {
      return this.unionVertices(vertex, withVertexParent);
    }

    if (withVertexParent === -1) {
      return this.unionVertices(withVertex, vertexParent);
    }

    return this.unionVertices(vertexParent, withVertexParent);
  }

  private unionVertices(vertex: number, withVertex: number) {
    const vertexChildren = this.nodesChildren.get(vertex)!;
    const withVertexChildren = this.nodesChildren.get(withVertex)!;

    if (vertexChildren.size >= withVertexChildren.size) {
      this.nodesParents.set(withVertex, vertex);
      this.changeParentForChildren(withVertex, vertex);
      vertexChildren.add(withVertex);
    } else {
      this.nodesParents.set(vertex, withVertex);
      this.changeParentForChildren(vertex, withVertex);
      withVertexChildren.add(vertex);
    }

    this.clustersCount -= 1;
  }

  changeParentForChildren(vertex: number, newParent: number) {
    const children = this.nodesChildren.get(vertex)!;
    const newParentChildren = this.nodesChildren.get(newParent)!;

    if (children.size === 0) {
      return;
    }

    for (const child of children) {
      this.nodesParents.set(child, newParent);
      newParentChildren.add(child);
      children.delete(child);
    }
  }

  public find(vertex: number) {
    return this.nodesParents.get(vertex)!;
  }

  public get size() {
    return this.clustersCount;
  }
}

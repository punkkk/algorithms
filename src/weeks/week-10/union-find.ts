export class UnionFind {
  private nodesParents: Map<number, number> = new Map();
  private nodesChildren: Map<number, Set<number>> = new Map();

  constructor(size: number) {
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

    if (vertexParent === -1) {
      return this.unionVertices(vertex, withVertexParent);
    }

    if (withVertexParent === -1) {
      return this.unionVertices(withVertex, vertexParent);
    }
  }

  private unionVertices(vertex: number, withVertex: number) {
    const vertexChildren = this.nodesChildren.get(vertex)!;
    const withVertexChildren = this.nodesChildren.get(vertex)!;

    if (vertexChildren.size > withVertexChildren.size) {
      this.nodesParents.set(withVertex, vertex);
      this.changeParentForChildren(withVertex, vertex);
      vertexChildren.add(withVertex);
    } else {
      this.nodesParents.set(vertex, withVertex);
      this.changeParentForChildren(vertex, withVertex);
      withVertexChildren.add(vertex);
    }
  }

  changeParentForChildren(vertex: number, newParent: number) {
    const children = this.nodesChildren.get(vertex)!;

    if (children.size === 0) {
      return;
    }

    for (const child of children) {
      this.nodesParents.set(child, newParent);
    }
  }

  public find(vertex: number) {
    return this.nodesParents.get(vertex)!;
  }
}

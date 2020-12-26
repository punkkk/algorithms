import { ISymbol } from "./types";

interface ILeafParams {
  value: ISymbol;
}

export class Leaf {
  public left: Leaf | null = null;
  public right: Leaf | null = null;
  public value: ISymbol;

  constructor(params: ILeafParams) {
    this.value = params.value;
  }

  unmerge() {
    const children = this.value.getChildren();

    if (children.length != 0) {
      this.left = new Leaf({
        value: children[0],
      });

      this.right = new Leaf({
        value: children[1],
      });

      this.left.unmerge();
      this.right.unmerge();
    }
  }

  maxDepth(): number {
    if (this.right == null && this.left == null) {
      return 0;
    }

    return 1 + Math.max(this.left?.maxDepth() || 0, this.right?.maxDepth() || 0);
  }

  minDepth(): number {
    if (this.right == null && this.left == null) {
      return 0;
    }

    return 1 + Math.min(this.left?.minDepth() || 0, this.right?.minDepth() || 0);
  }
}

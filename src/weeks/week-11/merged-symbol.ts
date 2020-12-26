import { ISymbol } from "./types";
import { BaseSymbol } from "./base-symbol";

export class MergedSymbol extends BaseSymbol {
  private readonly children: ISymbol[];

  constructor(children: ISymbol[]) {
    super(children.reduce((a, v) => a + v.getWeight(), 0));

    this.children = children;
  }

  getChildren(): ISymbol[] {
    return this.children;
  }
}

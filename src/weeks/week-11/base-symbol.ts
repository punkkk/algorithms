import { ISymbol } from "./types";

export class BaseSymbol implements ISymbol {
  private readonly weight: number;

  constructor(weight: number) {
    this.weight = weight;
  }

  getWeight(): number {
    return this.weight;
  }

  valueOf(): number {
    return this.weight;
  }

  getChildren(): ISymbol[] {
    return [];
  }
}

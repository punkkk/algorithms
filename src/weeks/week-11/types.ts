export interface ISymbol {
  getWeight: () => number;
  getChildren: () => ISymbol[];
  valueOf: () => number;
}

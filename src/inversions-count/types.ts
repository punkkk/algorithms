export interface IInversionsCounter<T> {
  count: (array: T[], length: number) => number;
}

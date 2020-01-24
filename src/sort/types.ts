export interface ISorter <T> {
  sort: (array: Array<T>, length: number) => Array<T>
}

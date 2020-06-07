export class Quicksort {
  // todo make it clear
  private comparisons: number = 0;

  sort(array: number[]) {
    // i'm too lazy to do it better
    this.comparisons = 0;

    return this.doSort(array);
  }
  doSort(array: number[]): number[] {
    if (array.length <= 1) {
      return array;
    }

    const pivot = array[0];
    const [left, right] = this.partition(array, 0, array.length);

    return this.doSort(left)
      .concat([pivot])
      .concat(this.doSort(right));
  }

  partition(array: number[], left: number, right: number) {
    const pivot = array[left];
    let i = left + 1;

    for (let j = left + 1; j < right; j++) {
      if (array[j] < pivot) {
        this.comparisons += 1;
        [array[i], array[j]] = [array[j], array[i]];

        i += 1;
      }
    }

    [array[i - 1], array[left]] = [array[left], array[i - 1]];

    return [array.slice(left, i - 1), array.slice(i, right)];
  }

  getComparisons() {
    return this.comparisons;
  }
}

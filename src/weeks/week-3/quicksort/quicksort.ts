export class Quicksort {
  sort(array: number[]) {
    return this.partition(array, 0, array.length);
  }
  partition(array: number[], left: number, right: number) {
    const pivot = array[left];
    let i = left + 1;

    for (let j = left + 1; j < right; j++) {
      if (array[j] < pivot) {
        array[i] += array[j];
        array[j] = array[i] - array[j];
        array[i] -= array[j];

        i += 1;
      }
    }

    array[i - 1] += array[left];
    array[left] = array[i - 1] - array[left];
    array[i - 1] -= array[left];

    return array;
  }
}

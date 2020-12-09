import { Edge } from "./edge";

export class Heap {
  private heap: Edge[] = [];

  getSize() {
    return this.heap.length;
  }

  insertMany(values: Edge[]) {
    values.forEach((v) => this.insert(v));
  }

  insert(edge: Edge) {
    this.heap.push(edge);

    if (this.heap.length > 1) {
      let index = this.heap.length - 1;

      for (;;) {
        const parentIndex = Math.floor(index / 2);

        if (this.heap[parentIndex].weight > edge.weight) {
          [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  }

  getMin() {
    return this.heap[0];
  }

  extractMin() {
    const minimum = this.heap.shift();

    if (this.heap.length > 1) {
      this.heap.unshift(this.heap.pop()!);

      let index = 0;

      for (;;) {
        const leftSuccessorIndex = 2 * index;
        const rightSuccessorIndex = 2 * index + 1;

        let swapWithIndex;

        if (
          this.heap[rightSuccessorIndex] === undefined ||
          this.heap[leftSuccessorIndex].weight <= this.heap[rightSuccessorIndex].weight
        ) {
          swapWithIndex = leftSuccessorIndex;
        } else {
          swapWithIndex = rightSuccessorIndex;
        }

        if (this.heap[swapWithIndex] && this.heap[swapWithIndex].weight < this.heap[index].weight) {
          [this.heap[swapWithIndex], this.heap[index]] = [this.heap[index], this.heap[swapWithIndex]];

          index = swapWithIndex;
        } else {
          break;
        }
      }
    }

    return minimum;
  }

  toString() {
    return this.heap.map((e) => e.weight).join(",");
  }
}

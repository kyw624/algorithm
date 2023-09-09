function solution(ability, number) {
  class MinHeap {
    constructor(data) {
      this.data = [null, ...data];
      this.size = data.length;
    }

    push(x) {
      this.data[++this.size] = x;

      let index = this.size;

      while (index !== 1) {
        const parent = parseInt(index / 2);

        if (this.data[index] >= this.data[parent]) break;

        const tmp = this.data[parent];

        this.data[parent] = this.data[index];
        this.data[index] = tmp;
        index = parent;
      }
    }

    pop() {
      const popValue = this.data[1];

      this.data[1] = this.data[this.size--];

      let index = 1;

      while (index * 2 <= this.size) {
        const leftChild = index * 2;
        const rightChild = index * 2 + 1;
        let minChild = leftChild;

        if (
          rightChild <= this.size &&
          this.data[rightChild] < this.data[leftChild]
        ) {
          minChild = rightChild;
        }

        if (this.data[index] <= this.data[minChild]) break;

        const tmp = this.data[index];

        this.data[index] = this.data[minChild];
        this.data[minChild] = tmp;
        index = minChild;
      }

      return popValue;
    }
  }

  let heap = new MinHeap([...ability].sort((a, b) => a - b));

  for (let i = 0; i < number; i++) {
    const a = heap.pop();
    const b = heap.pop();

    heap.push(a + b);
    heap.push(b + a);
  }

  return heap.data.reduce((sum, cur) => sum + cur);
}

console.log(solution([10, 3, 7, 2], 2)); // 37
console.log(solution([1, 2, 3, 4], 3)); // 26

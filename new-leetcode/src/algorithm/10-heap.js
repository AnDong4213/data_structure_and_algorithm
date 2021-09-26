class MinHeap {
  constructor() {
    this.heap = [];
  }

  swap(i1, i2) {
    const temp = this.heap[i1];
    this.heap[i1] = this.heap[i2];
    this.heap[i2] = temp;
  }
  getParentIndex(i) {
    return (i - 1) >> 1;
  }
  getLeftIndex(i) {
    return i * 2 + 1;
  }
  getRightIndex(i) {
    return i * 2 + 2;
  }
  shiftUp(index) {
    if (index == 0) return;

    const parentIndex = this.getParentIndex(index);
    if (this.heap[parentIndex] > this.heap[index]) {
      this.swap(parentIndex, index);
      this.shiftUp(parentIndex);
    }
  }
  insert(value) {
    this.heap.push(value);
    this.shiftUp(this.heap.length - 1);
  }
  shiftDown(index) {
    const leftIndex = this.getLeftIndex(index);
    const rightIndex = this.getRightIndex(index);

    if (this.heap[leftIndex] < this.heap[index]) {
      this.swap(leftIndex, index);
      this.shiftDown(leftIndex);
    }
    if (this.heap[rightIndex] < this.heap[index]) {
      this.swap(rightIndex, index);
      this.shiftDown(rightIndex);
    }
  }
  pop() {
    if (this.size() === 1) return this.heap.shift();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.shiftDown(0);
    return top;
  }
  peek() {
    return this.heap[0];
  }
  size() {
    return this.heap.length;
  }
}

const h = new MinHeap();
h.insert(3);
h.insert(2);
h.insert(13);
h.insert(41);
h.insert(5);
h.insert(19);
console.log(h);
console.log(h.pop());

// reduceRight() 方法的功能和 reduce() 功能是一样的，不同的是 reduceRight() 从数组的末尾向前将数组中的数组项做累加。
/* var numbers = [5, 4, 1, 9];
let aaa = 0;
let bb = numbers.reduceRight((prev, next) => {
  console.log(next);
  return prev + next;
}, aaa);
console.log(bb); */

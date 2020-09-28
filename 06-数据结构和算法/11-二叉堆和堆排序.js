// // 基于数组创建最小堆

// class MinHeap {
//   constructor() {
//     this.heap = [];
//   }

//   compare(a, b) {
//     if (a === b) {
//       return 0;
//     }
//     return a > b ? 1 : -1;
//   }

//   getLeftIndex(index) {
//     return index * 2 + 1;
//   }
//   getRightIndex(index) {
//     return index * 2 + 2;
//   }
//   getParentIndex(index) {
//     if (index === 0) {
//       return undefined;
//     }
//     return Math.floor((index - 1) / 2);
//   }

//   insert(val) {
//     if (val) {
//       this.heap.push(val);
//       //   console.log(this.heap);
//       this.shiftUp(this.heap.length - 1);
//       console.log(this.heap);
//       return true;
//     }
//     return false;
//   }

//   shiftUp(index) {
//     let parentIndex = this.getParentIndex(index);
//     while (
//       index > 0 &&
//       this.compare(this.heap[index], this.heap[parentIndex]) < 0
//     ) {
//       // 进行交换
//       this.swap(index, parentIndex);
//       index = parentIndex;
//       parentIndex = this.getParentIndex(index);
//     }
//   }

//   swap(index, parent) {
//     let temp = this.heap[index];
//     this.heap[index] = this.heap[parent];
//     this.heap[parent] = temp;
//   }
//   size() {
//     return this.heap.length;
//   }

//   isEmpty() {
//     return this.heap.length === 0;
//   }
//   findMinNum() {
//     return this.isEmpty() ? undefined : this.heap[0];
//   }

//   /**
//    *  导出最小值，并调整堆
//    */

//   extract() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     if (this.size() === 1) {
//       return this.heap.unshift();
//     }

//     const removeValue = this.heap.unshift();
//     this.shiftDown();
//     return removeValue;
//   }

//   shiftDown(index) {
//     let element = index;
//     const left = this.getLeftIndex(element),
//       right = this.getRightIndex(element);
//     if (
//       left < this.size() &&
//       this.compare(this.heap[element], this.heap[left]) > 0
//     ) {
//       element = left;
//     }
//     if (
//       right < this.size() &&
//       this.compare(this.he[element], this.heap[right]) > 0
//     ) {
//       element = right;
//     }
//     if (element != index) {
//       this.swap(this.heap[element], this.heap[index]);
//       this.shiftDown(element);
//     }
//   }
// }

// let test = new MinHeap();

// test.insert(1);
// test.insert(2);
// test.insert(5);
// test.insert(6);
// test.insert(7);
// test.insert(3);

// // console.log(test);

/**
 * 堆排序
 */

function heapSort(array) {
  let heapSize = array.length;
  buildMaxHeap(array);
  while (heapSize > 1) {
    swap(array, 0, --heapSize);
    console.log(array.join(' '));
    heapify(array, 0, heapSize);
  }
  return array;
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

// [2,3,5,6,7,8]
/**
 *       2
 *     3   5
 *   6  7 8
 *
 * len = 6
 */

function buildMaxHeap(array) {
  for (let i = Math.floor(array.length / 2); i >= 0; i -= 1) {
    heapify(array, i, array.length);
  }
}

function heapify(array, index, length) {
  let element = index,
    left = index * 2 + 1,
    right = index * 2 + 2;
  if (right < length && array[right] > array[element]) {
    element = right;
  }
  if (left < length && array[left] > array[element]) {
    element = left;
  }
  if (element != index) {
    [array[index], array[element]] = [array[element], array[index]];
    heapify(array, element, length);
  }
}

// 比较函数
function compare(a, b) {
  if (a === b) {
    return 0;
  }
  return a > b ? 1 : -1;
}

console.log(heapSort([7, 6, 3, 5, 4, 1, 2]));

/**
 *           8
 *         7   2
 *       6  3 5
 *
 */

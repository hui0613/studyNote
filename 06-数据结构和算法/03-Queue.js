//  队列

// class Queue {
//   constructor() {
//     this.count = 0;
//     this.lowestCount = 0;
//     this.items = {};
//   }
//   enqueue(item) {
//     this.items[this.count++] = item;
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     const result = this.items[this.lowestCount];
//     delete this.items[this.lowestCount];
//     this.lowestCount++;
//     return result;
//   }
//   isEmpty() {
//     return this.count === this.lowestCount;
//   }
//   peek() {
//     if (this.isEmpty()) {
//       return undefined;
//     }
//     return this.items[this.lowestCount];
//   }
//   size() {
//     return this.count - this.lowestCount;
//   }
//   clear() {
//     this.count = this.lowestCount = 0;
//     this.items = {};
//   }
// }

// 双端队列

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  addFront(item) {
    if (this.isEmpty()) {
      this.addBack(item);
    } else if (this.lowestCount > 0) {
      this.items[--this.lowestCount] = item;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
      this.count++;
      this.lowestCount = 0;
      this.items[this.lowestCount] = item;
    }
  }
  addBack(item) {
    this.items[this.count++] = item;
  }
  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return result;
  }
  peekFront() {
    return this.items[this.lowestCount];
  }
  peekBakc() {
    return this.items[this.count];
  }
  isEmpty() {
    return this.count === this.lowestCount;
  }
  size() {
    return this.count - this.lowestCount;
  }
}

// 模拟击鼓传花游戏
// /**
//  * 击鼓传花
//  * 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
//  * 某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。
//  * 重复这个过程，直到只剩一个孩子（胜者）。
//  *
//  *
//  * @param {*} list
//  * @param {*} num
//  */
// function hotPotato(list, num) {
//   const queue = new Queue();
//   for (let i = 0; i < list.length; i++) {
//     // 将所有玩家加入到队列中
//     queue.enqueue(list[i]);
//   }
//   while (queue.size() > 1) {
//     for (let i = 0; i < num; i++) {
//       queue.enqueue(queue.dequeue());
//     }
//     queue.dequeue();
//   }
//   return queue.dequeue();
// }

/**
 * 回文检查器
 * 使用双端队列实现
 */
function palindromeChecker(str) {
  if (str === undefined || str === null || (str != null && str.length == 0)) {
    return false;
  }
  const queue = new Deque();
  for (let i = 0; i < str.length; i++) {
    queue.addBack(str.charAt(i));
  }
  let flag = true,
    fronStr,
    endStr;
  while (queue.size() > 1 && flag) {
    fronStr = queue.removeFront();
    endStr = queue.removeBack;
    if (fronStr !== endStr) {
      flag = false;
    }
  }
  return flag;
}

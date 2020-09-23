/**
 * 两个队列模拟一个栈
 *
 * 思路： 当需要往栈中压入元素时，先将需要压入的元素 push 进一个临时队列中，
 * 将存储栈中元素的队列中的元素一次 push 进临时队列中，这样，新添加的元素
 * 位于队列的头部，相当于栈的栈顶
 */

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }
  enqueue(item) {
    this.items[this.count++] = item;
  }
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }
  isEmpty() {
    return this.count === this.lowestCount;
  }
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.lowestCount];
  }
  size() {
    return this.count - this.lowestCount;
  }
  clear() {
    this.count = this.lowestCount = 0;
    this.items = {};
  }
}
let myStack = function () {
  // 使用一个队列存储元素
  this.queue = new Queue();
};

myStack.prototype.push = function (x) {
  // 创建临时队列
  const tempQueue = new Queue();
  // 将新元素添加到临时队列中
  tempQueue.dequeue(x);

  while (this.queue.size()) {
    tempQueue.dequeue(this.queue.dequeue());
  }
  this.queue = tempQueue;
};

MyStack.prototype.pop = function () {
  return this.queue.dequeue();
};

MyStack.prototype.top = function () {
  return this.queue.peek();
};

MyStack.prototype.empty = function () {
  return this.queue.isEmpty();
};

/**
 * 使用栈模拟队列
 *
 * 添加元素是将元素压入栈中，弹出元素时，先将栈中一次弹出然后压入另一个栈中
 */

var CQueue = function () {
  this.stack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  let tempstack = [];
  while (this.stack.length > 0) {
    tempstack.push(this.stack.pop());
  }
  tempstack.push(value);
  while (tempstack.length > 0) {
    this.stack.push(tempstack.pop());
  }
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.stack.length > 0) {
    return this.stack.pop();
  } else {
    return -1;
  }
};

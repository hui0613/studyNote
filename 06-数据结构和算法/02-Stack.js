class Stack {
  constructor() {
    // 创建一个数组用于存储元素
    this.items = [];
  }
  //压入元素
  push(item) {
    this.items.push(item);
  }
  // 删除栈顶元素
  pop() {
    return this.items.pop();
  }
  // 返回栈顶元素但是不删除栈顶元素
  peek() {
    return this.items[this.items.length - 1];
  }
  //检查栈是否为空
  isEmpty() {
    return this.items.length === 0;
  }
  //返回栈的长度
  size() {
    return this.items.length;
  }
  //清空栈
  clear() {
    this.items = [];
  }
}

// const items = new WeakMap();
// class Stack {
//   constructor() {
//     items.set(this, []);
//   }
//   push(item) {
//     let s = items.get(this);
//     s.push(item);
//   }
//   pop() {
//     let s = items.get(this);
//     const r = s.pop();
//     return r;
//   }
// }

// function decimal(num) {
//   const stack = new Stack();
//   let rem,
//     res = '';
//   while (num > 0) {
//     // 转换成二进制
//     rem = num % 2;
//     stack.push(rem);
//     num = Math.floor(num / 2);
//   }
//   while (!stack.isEmpty()) {
//     res += stack.pop().toString();
//   }
//   return res;
// }

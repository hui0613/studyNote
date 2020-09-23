class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.count = 0;
    this.head = null;
  }
  //    往链表末尾添加元素
  push(data) {
    let node = new Node(data);
    let cur = null;
    if (this.head === null) {
      this.head = node;
    } else {
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.count++;
  }

  // 往链表中间添加元素
  insert(data, position) {
    if (position >= this.count || this.count == 0) {
      this.push(data);
    } else {
      let node = new Node(data);
      let cur = this.head,
        index = 0;
      while (index != position) {
        cur = cur.next;
        index++;
      }
      node.next = cur.next;
      cur.next = node;
      this.count++;
    }
  }
  // 返回特定位置的元素
  getElementAt(index) {
    let cur = this.head,
      curIndex = 0;
    while (curIndex < index && cur) {
      cur = cur.next;
      curIndex++;
    }
    if (cur) {
      return cur.data;
    } else {
      return undefined;
    }
  }
  remove(item) {
    let cur = this.head;
    while (cur.next && cur.next.data != item) {
      cur = cur.next;
    }
    // 删除的不是左右一个节点
    if (cur.next) {
      cur.next = cur.next.next;
    } else {
      //删除的节点是最后一个节点
      cur.next = null;
    }
    this.count--;
  }
  reomveAt(positon) {
    if (positon >= 0 && positon < this.count) {
      let cur = this.head,
        index = 0,
        deleteData = null;
      if (positon == 0) {
        deleteData = cur;
        this.head = cur.next;
      } else {
        while (cur && index < positon) {
          cur = cur.next;
          index++;
        }
        deleteData = cur.next;
        cur.next = cur.next.next;
      }
      this.count--;
      return deleteData;
    }
    return undefined;
  }
}

let link = new LinkedList();
link.push(1);
link.push(2);
link.push(3);
link.insert(5, 1);
// console.log(link.getElementAt(3));
console.log(link.head.next);
link.remove(3);
console.log(link.head.next);

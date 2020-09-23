// class DoubleNode {
//   constructor() {
//     this.data = data;
//     this.next = null;
//     this.pre = null;
//   }
// }

// class DoublyLinkedList {
//   constructor() {
//     this.count = 0;
//     this.head = null;
//     // 引用链表的最后一个元素，可以从链表的末尾开始迭代列表
//     this.tail = null;
//   }
// }

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let count = 0,
    temp = head;
  while (temp) {
    temp = temp.next;
    count++;
  }
  if (count === n) {
    head = null;
    return head;
  }
  temp = head;
  let index = 0;
  while (index < count - n - 1) {
    temp = temp.next;
    index++;
  }
  //   console.log(temp.next);
  temp.next = temp.next === null ? null : temp.next.next;
  console.log(temp);

  return head;
};
let head = new ListNode(1);
console.log(removeNthFromEnd(head, 1));

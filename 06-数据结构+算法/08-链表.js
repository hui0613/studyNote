/**
 * 设计一个基于 对象 的链表
 */


// Node 类
function Node(el) {
    this.element = el;
    this.next = null
}


// LinkedList类
function LList() {
    this.head = new Node('head')
    this.find = find
    this.insert = insert
    this.remove = remove
    this.display = display
    this.findPrevious = findPrevious

    //查找节点
    function find(item) {
        let curNode = this.head
        while (curNode.element != item) {
            curNode = curNode.next
        }
        return curNode
    }

    /**
     * 插入新节点
     * 
     * @param {*} element 新插入节点的值
     * @param {*} item 插入位置节点的值
     */
    function insert(element,item) {
        let newNode = new Node(element)
        let curNode = this.find(item)
        newNode.next = curNode.next
        curNode.next = newNode
    }

    //查找某一个节点的前一个节点
    function findPrevious(item) {
        let curNode = this.head
        while (!(curNode,next == null) && (curNode.next.element === item)) {
            curNode = curNode.next
        }
        return curNode
    }


    // 删除节点
    function remove() {
        let prevNode = tihs.findPrevious(item)
        if (prevNode.next != null) {
            prevNode.next = prevNode.next.next
        }
    }
}



/******************************************/


/**
 * 双向链表
 */

function Node(element) {
    this.element = element
    this.next = null
    this.previous = null
}
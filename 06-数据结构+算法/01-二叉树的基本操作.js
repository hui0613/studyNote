/**
 * 二叉树节点基本数据结构
 */

function Node(data,left,right) {
    this.data = data;
    this.left = left;
    this.right = right
}

Node.prototype = {
    show() {
        console.log(this.data)
    }
}

/**
 * 二叉树结构及方法
 */

function Tree() {
    this.root = null;
}

Tree.prototype = {
    /**
     * 往二叉树中插入节点
     */
    insert(data) {
        let node = new Node(data,null,null)
        // 判断根节点是否为空
        if (!this.root) {
            this.root = node
            return
        }
        /**
         * 判断当前节点是否有子节点
         * 将新的节点插入到叶子节点中
         */

        let currentNode = this.root,
            parentNode = null;

        while (currentNode) {
            parentNode = currentNode
            if (data < parentNode.data) {
                currentNode = parentNode.left
                if (!currentNode) {
                    parentNode.left = node
                    return
                }
            } else {
                currentNode = parentNode.right
                if (!currentNode) {
                    parentNode.right = node
                    return
                }
            }
        }

    },


    /**
     * 先序遍历
     */

    preOrder(node) {
        if (node) {
            node.show()
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    },

    /**
     * 中序遍历
     */

    middOrder(node) {
        if (node) {
            this.middOrder(node.left)
            node.show()
            this.middOrder(node.right)
        }
    },


    /**
     * 后序遍历
     */

    laterOrder(node) {
        if (node) {
            this.laterOrder(node.left)
            this.laterOrder(node.right)
            node.show()
        }
    },

    /**
     * 获取完全二叉树的最小值
     * 获取左子树的最后一个左叶子节点
     */

    getMin: function () {
        var current = this.root;
        while (current) {
            if (!current.left) {
                return current;
            }
            current = current.left;
        }
    },

    /**
     * 获取最大值
     */
    getMax: function () {
        var current = this.root;
        while (current) {
            if (!current.right) {
                return current;
            }
            current = current.right;
        }
    },


    /**
     * 获取二叉树的深度
     */

    getDeep(node,deep) {
        let deep = deep || 0
        if (!node) return deep

        deep++
        let deepLeft = this.getDeep(node.left,deep)
        let deepRight = this.getDeep(ndoe.right,deep)
        return Math.max(deepLeft,deepRight)
    },

    /**
     * 查找节点
     */

    getNode(node,data) {
        if (node.data == data) {
            return node
        } else if (data < node.data) {
            this.getNode(node.left,data)
        } else {
            this.getNode(node.right,data)
        }

    }
}


/**
 * 二分查找
 */


function binarySearch(data,arr,start,end) {
    if (start > end) {
        return -1
    }
    let mid = parseInt((start + end) / 2)
    if (data === arr[mid]) {
        return mid
    } else if (data < arr[mid]) {
        this.binarySearch(data,arr,start,mid - 1)
    } else {
        this.binarySearch(data,arr,mid + 1,end)
    }
}


































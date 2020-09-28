// BinarySearchTree

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  // 节点值比较
  compare(key, node) {
    if (key < node.key) {
      return -1;
    } else {
      return 1;
    }
  }
  //插入节点
  insert(key) {
    if (!this.root) {
      this.root = new Node(key);
    } else {
      this.insertNode(key, this.root);
    }
  }
  // 插入节点辅助函数
  insertNode(key, node) {
    if (this.compare(key, node) < 0) {
      if (node.left === null) {
        node.left = new Node(key);
      } else {
        this.insertNode(key, node.left);
      }
    } else {
      if (node.right === null) {
        node.right = new Node(key);
      } else {
        this.insertNode(key, node.right);
      }
    }
  }

  //中序遍历
  inOrderTraverse() {
    this.inOrderTraverseNode(this.root);
  }
  // 中序遍历辅助函数
  inOrderTraverseNode(node) {
    if (node != null) {
      this.inOrderTraverseNode(node.left);
      console.log(node.key);
      this.inOrderTraverseNode(node.right);
    }
  }

  //先序遍历
  preOrderTraverse() {
    this.preOrderTraverseNode(this.root);
  }
  // 先序遍历辅助函数
  preOrderTraverseNode(node) {
    if (node != null) {
      console.log(node.key);
      this.preOrderTraverseNode(node.left);

      this.preOrderTraverseNode(node.right);
    }
  }

  // 后序遍历
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback);
  }
  // 后序遍历辅助函数
  postOrderTraverseNode(node, callback) {
    if (node != null) {
      this.postOrderTraverseNode(node.left, callback); // {1}
      this.postOrderTraverseNode(node.right, callback); // {2}
      callback(node.key); // {3}
    }
  }

  //查找二叉搜索树中的最小值
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    let current = node;
    while (current != null && current.left != null) {
      current = current.left;
    }
    return current;
  }

  //查找最大值
  max() {
    return this.maxNode(this.root);
  }
  maxNode(node) {
    let current = node;
    while (current != null && current.right != null) {
      // {5}
      current = current.right;
    }
    return current;
  }

  // 查询特定的节点
  search(key) {
    this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node == null) {
      return false;
    } else if (key < node.key) {
      return this.searchNode(node.left, key);
    } else if (key === node.key) {
      return this.searchNode(node.right, key);
    } else {
      return true;
    }
  }

  // 删除节点
  remove(key) {
    this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) {
      return null;
    }

    if (this.compare(key, node) < 0) {
      node.left = this.removeNode(node, key);
      return node;
    } else if (this.compare(key, node) > 0) {
      node.right = this.removeNode(node, key);
      return node;
    } else {
      // 叶子节点
      if (node.left == null && node.right == null) {
        node = null;
        return node;
      } else if (node.left == null) {
        // 只有右节点
        node = node.right;
        return node;
      } else if (node.right == null) {
        // 只有左节点
        node = node.left;
        return node;
      }
      /**  处理有两个子结点的节点
       *
       * 将需要删除的节点的值替换成右子树中最小的节点值，然后删除右子树中最小值的节点
       */
      const aux = this.minNode(node.right);
      node.key = aux.key;
      node.right = this.removeNode(node.right, aux.key);
      return node;
    }
  }
}

/************************ */

// AVL  树
class AVLTree extends BinarySearchTree {
  constructor() {
    super();
    this.root = null;
    const BalanceFactor = {
      UNBALANCED_RIGHT: 1,
      SLIGHTLY_UNBALANCED_RIGHT: 2,
      BALANCED: 3,
      SLIGHTLY_UNBALANCED_LEFT: 4,
      UNBALANCED_LEFT: 5,
    };
  }

  // 计算节点的高度
  //叶子节点的高度为 0
  getHeight(node) {
    if (node === null) {
      return -1;
    }
    return Math.max(this.getHeight(node.left, this.getHeight(node.right)) + 1);
  }

  // 计算节点的平衡因子
  getBalanceFactor(node) {
    let dsitance = this.getHeight(node.left) - this.getHeight(node.right);
    switch (dsitance) {
      case -2:
        return this.BalanceFactor.UNBALANCED_RIGHT;
      case -1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return this.BalanceFactor.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return this.BalanceFactor.UNBALANCED_LEFT;
      default:
        return this.BalanceFactor.BALANCED;
    }
  }
  // rotationLL 向右的单旋转
  rotationLL(node) {
    let temp = node.left;
    node.left = temp.left;
    temp.right = node;
    return temp;
  }

  // RR 向左单向旋转
  rotationRR(node) {
    let temp = node.right;
    node.right = temp.right;
    temp.left = node;
    return temp;
  }

  //  LR 向右的双旋转
  rotationLR(node) {
    node.left = this.rotationRR(node.left);
    return this.rotationLL(node);
  }

  //RL 向左的双旋转 -- 右侧节点高度大于左侧节点
  rotationRL(node) {
    node.right = this.rotationLL(node.right);
    return this.rotationRR(node);
  }
}

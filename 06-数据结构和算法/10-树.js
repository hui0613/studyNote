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
}

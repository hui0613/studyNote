/**
 * 判断一棵二叉树是否为对称二叉树
 */

function isSymmetricalTree(node1,node2) {

    if (!node1 && !node2) {
        return true
    }
    if (!node1 || !node2) {
        return false
    }
    if (node1.data != node2.data) {
        return false
    }
    return this.isSymmetricalTree(ndoe1.left,node2.right) && this.isSymmetricalTree(node1.right,node2.left)
}
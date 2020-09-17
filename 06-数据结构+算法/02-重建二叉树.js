function reConstructorBinaryTree(pre,mid) {
    if (pre.length === 0) {
        return null
    }
    if (pre.length === 1) {
        return new Node(pre[0])
    }

    // 获取根节点
    const root = pre[0]

    //在中序遍历中获取根节点的位置
    const index = mid.indexOf(root)

    // 在中序遍历中截取左右子树 
    const midLeft = mid.slice(0,index)
    const midRight = mid.slice(index + 1)

    //在前序遍历中截取左右子树
    const preLeft = pre.slice(1,index + 1)
    const preRight = pre.slice(index + 1)

    const node = new Node(root)

    node.left = this.reConstructorBinaryTree(preLeft,midLeft)
    node.midRight = this.reConstructorBinaryTree(preRight,midRight)
    return node
}


function getHRD(pre,vin) {
    if (!pre) {
        return '';
    }
    if (pre.length === 1) {
        return pre;
    }
    const head = pre[0];
    const splitIndex = vin.indexOf(head);
    const vinLeft = vin.substring(0,splitIndex);
    const vinRight = vin.substring(splitIndex + 1);
    const preLeft = pre.substring(1,splitIndex + 1);
    const preRight = pre.substring(splitIndex + 1);
    return getHRD(preLeft,vinLeft) + getHRD(preRight,vinRight) + head;
}

console.log(getHRD('abdecfh','dbeafch'))
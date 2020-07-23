var delNodes = function(root, to_delete) {
    if(!root) return [];
    let res = [];
    let traverse = (node, isRoot) => {
        console.log(node);
        if(!node) return;
        let isNodeDeleted = to_delete.includes(node.val);
        if(node.left) node.left = traverse(node.left, isNodeDeleted);
        if(node.right) node.right = traverse(node.right, isNodeDeleted);
        if(isRoot && !isNodeDeleted) res.push(node);
        console.log(res);
        return isNodeDeleted ? null : node;
    }
    traverse(root, true);
    return res;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
var verticalTraversal = function(root) {
    const queue = [[root, 0, 0]];
    console.log("queue", queue);
    console.log("root", root);
    const map = {};
    while(queue.length) {
        const [node, i, j] = queue.shift();
        console.log("shifted queue", queue);
        console.log("shift", [node, i, j]);
        if(!(j in map)) map[j] = [];
        console.log("map", map);
        map[j].push([node.val, i]);
        console.log("pushed map", map);
        if(node.left){
            queue.push([node.left, i+1, j-1]);
            console.log("left pushed queue", queue);
        }
        if(node.right){
            queue.push([node.right, i+1, j+1]);
            console.log("right pushed queue", queue);
        }
    }
    console.log("queued map", map);
    return Object.keys(map)
        .sort((a,b)=>parseInt(a) - parseInt(b)) //order keys
        .map((key)=>map[key].sort(sort).map(([val])=>val));
};
function sort([val1, i1], [val2,i2]) {
    if(i1 !== i2){
        return i1-i2;
    }
    return val1-val2;
}

var root = new TreeNode(3);
var a = new TreeNode(9);
var b = new TreeNode(20);
var c = new TreeNode(15);
var d = new TreeNode(7);

// var root = new TreeNode(0);
// var a = new TreeNode(2);
// var b = new TreeNode(1);
// var c = new TreeNode(3);
// var d = new TreeNode(4);
// var e = new TreeNode(5);
// var f = new TreeNode(7);
// var g = new TreeNode(6);
// var h = new TreeNode(10);
// var i = new TreeNode(8);
// var j = new TreeNode(11);
// var k = new TreeNode(9);

root.left = a;
root.right = b;
b.left = c;
b.right = d;

console.log("Tree Node", height(TreeNode));
var res = verticalTraversal(root);
console.log(res);

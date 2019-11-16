//https://leetcode.com/problems/add-two-numbers/ print console log

function ListNode(val){
    this.val = val;
    this.next = null;
}
var addTwoNumbers = function(l1, l2) {


    const before = new ListNode();
    let tail = before;
    let c = 0;


    while (l1 || l2 || c) {
        console.log("what is l1",l1.val);
        const v1 = l1 ? l1.val : 0;
        const v2 = l2 ? l2.val : 0;
        const v = v1+v2+c;

        tail.next = new ListNode(v%10);
        tail = tail.next;
        c = v >= 10 ? 1 : 0;
        l1 = l1&&l1.next;
        l2 = l2&&l2.next;
    }
    return before.next;
};

let res123 = addTwoNumbers([2, 4, 3], [5, 6, 4]);
console.log("result",res123, ListNode);

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  const getNodeByIndex = function (list, index) {
    let node = list;
    while (index > 1) {
      if (!list.next) {
        break;
      }
      node = node.next;
      index--;
    }
    return node;
  };

  const getDeep = function (list) {
    let node = list;
    let deep = 1;
    while (node.next) {
      node = node.next;
      deep++;
    }
    return deep;
  };

  const deep = getDeep(head);

  const tailNode = getNodeByIndex(head, deep - k + 1);
  const positiveNode = getNodeByIndex(head, k);

  const temp = tailNode.val;
  tailNode.val = positiveNode.val;
  positiveNode.val = temp;
  return head;
};

let list1 = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } };
let list2 = { val: 1000000, next: { val: 1000001, next: { val: 1000002, next: null } } };

let r = swapNodes(list1, 2);

console.log(r);

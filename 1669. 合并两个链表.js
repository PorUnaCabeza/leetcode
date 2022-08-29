/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  const getNodeByIndex = function (list, index) {
    debugger;
    let node = list;
    while (index >= 0) {
      if (!list.next) {
        break;
      }
      node = node.next;
      index--;
    }
    return node;
  };
  const getTail = function (list) {
    let node = list;
    while (node.next) {
      node = node.next;
    }
    return node;
  };

  const preNode = getNodeByIndex(list1, a - 1);
  const nextNode = getNodeByIndex(list1, b + 1);
  preNode.next = list2;
  const tailNode = getTail(list2);
  tailNode.next = nextNode;
  return list1;
};
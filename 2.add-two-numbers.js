/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 *
 * https://leetcode.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (32.37%)
 * Likes:    6580
 * Dislikes: 1712
 * Total Accepted:    1.1M
 * Total Submissions: 3.5M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 *
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 *
 * Example:
 *
 *
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
 *
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  const getVal = node => (node ? node.val : 0);
  const getNext = node => (node ? node.next : null);
  const add = function(l1, l2, carry = 0) {
    let node = null;
    if (!l1 && !l2) {
      if (carry === 1) {
        node = new ListNode(1);
      }
      return node;
    }
    let t = getVal(l1) + getVal(l2) + carry;
    node = new ListNode(t % 10);
    node.next = add(getNext(l1), getNext(l2), t > 9 ? 1 : 0);
    return node;
  };
  return add(l1, l2);
};

// @lc code=end

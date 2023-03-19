/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

const mockData = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3
  }
}
var levelOrder = function(root) {
  let res = [];

  const visit = function(node, deep) {
    if (!node) {
      return;
    }
    res[deep] = res[deep] || [];
    res[deep].push(node.val);
    visit(node.left, deep+1);
    visit(node.right, deep+1);
  }
  visit(root, 0);
  return res;
};

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
var levelOrderBottom = function (root) {
  const res = []
  const visit = function (node, deep) {
    if (!node) {
      return
    }
    visit(node.left, deep + 1)
    visit(node.right, deep + 1)
    res[deep] = res[deep] || []
    res[deep].push(node.val)
  }
  visit(root, 0)
  return res.reverse()
}

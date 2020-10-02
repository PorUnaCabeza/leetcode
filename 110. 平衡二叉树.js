/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  let res = true

  const dfs = function (node) {
    if (!node) {
      return 0
    }

    const leftHeight = dfs(node.left)
    const rightHeight = dfs(node.right)
    if (Math.abs(leftHeight - rightHeight) > 1) {
      res = false
    }
    return Math.max(leftHeight, rightHeight) + 1
  }
  dfs(root)
  return res
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
  let min = Number.MAX_SAFE_INTEGER
  let pre = -1
  const dfs = function (node) {
    if (!node) {
      return
    }
    dfs(node.left)
    if (pre === -1) {
      pre = node.val
    } else {
      min = Math.min(min, Math.abs(node.val - pre))
      pre = node.val
    }
    dfs(node.right)
  }
  dfs(root)
  return min
}

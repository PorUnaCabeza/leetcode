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
var isUnivalTree = function (root) {
  if (!root) {
    return false
  }
  let old = root.val
  let r = true
  const dfs = function (node) {
    if (!node) {
      return
    }
    if (node.val !== old) {
      r = false
      return
    }
    dfs(node.left)
    dfs(node.right)
  }
  dfs(root)
  return r
}

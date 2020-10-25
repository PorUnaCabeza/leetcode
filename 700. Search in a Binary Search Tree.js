/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  const dfs = function (node) {
    if (!node) {
      return null
    }
    if (node.val === val) {
      return node
    } else if (val < node.val) {
      return dfs(node.left)
    } else {
      return dfs(node.right)
    }
  }
  return dfs(root)
}

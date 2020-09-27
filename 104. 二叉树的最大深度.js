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
var maxDepth = function (root) {
  let max = 0
  const recursive = function (node, deep) {
    if (!node) {
      max = Math.max(deep, max)
      return
    }
    recursive(node.left, deep + 1)
    recursive(node.right, deep + 1)
  }
  recursive(root, 0)
  return max
}

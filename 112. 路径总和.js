/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
  let res = false
  if (!root) return false
  const bfs = function (node, target) {
    if (!node) {
      return false
    }
    if (!node.left && !node.right && typeof node.val === 'number') {
      if (node.val === target) {
        res = true
      }
      return
    }
    bfs(node.left, target - node.val)
    bfs(node.right, target - node.val)
  }

  bfs(root, sum)
  return res
}

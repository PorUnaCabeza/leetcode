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
var sumOfLeftLeaves = function (root) {
  let res = 0
  const bfs = function (node, isLeft) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      if (isLeft) {
        res += node.val
      }
      return
    }
    bfs(node.left, true)
    bfs(node.right, false)
  }
  bfs(root, false)
  return res
}

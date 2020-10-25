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
 * @return {number}
 */
var findSecondMinimumValue = function (root) {
  if (!root) {
    return -1
  }
  let rootVal = root.val

  const dfs = function (node) {
    if (!node) {
      return -1
    }
    if (node.val > rootVal) {
      return node.val
    }
    let left= dfs(node.left)
    let right = dfs(node.right)
    if (left < 0) return right
    if (right < 0) return left
    return Math.min(left, right)
  }
  return dfs(root)
}
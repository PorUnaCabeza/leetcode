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
var minDiffInBST = function (root) {
  let array = []
  const dfs = function (node) {
    if (!node) {
      return
    }
    dfs(node.left)
    array.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  let min = Number.MAX_SAFE_INTEGER
  for (let cursor = 0; cursor < array.length - 1; cursor++) {
    let difference = Math.abs(array[cursor] - array[cursor + 1])
    if (difference === 0) {
      min = 0
      break
    } else {
      min = Math.min(min, difference)
    }
  }
  return min
}

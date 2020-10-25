/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  let max = 0
  const dfs = function (node, depth) {
    if (!node) {
      return
    }
    max = Math.max(max, depth)
    if (!node.children) {
      return
    }
    node.children.forEach(child => dfs(child, depth + 1))
  }
  dfs(root, 1)
  return max
}

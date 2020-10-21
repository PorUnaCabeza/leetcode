/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  let result = []
  const dfs = function (node) {
    if (!node) {
      return
    }
    result.push(node.val)
    if (!node.children) return
    node.children.forEach(child => dfs(child))
  }
  dfs(root)
  return result
}

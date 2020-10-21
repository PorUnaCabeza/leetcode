/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  let result = []
  const dfs = function (node) {
    if (!node) {
      return
    }
    if (!node.children) return
    node.children.forEach(child => dfs(child))
    result.push(node.val)
  }
  dfs(root)
  return result
}

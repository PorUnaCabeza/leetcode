/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
  if (!root) {
    return []
  }
  let res = []
  const bfs = function (node, str = '') {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      // 叶子结点
      res.push(str + node.val)
      return
    }
    str += node.val + '->'
    bfs(node.left, str)
    bfs(node.right, str)
  }
  bfs(root, '')
  return res
}

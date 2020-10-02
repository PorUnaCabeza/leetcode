/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null
  let res = new TreeNode()
  const reverse = function (node, mirror) {
    if (!node) {
      return
    }
    mirror.val = node.val
    if (node.left) {
      mirror.right = new TreeNode()
      reverse(node.left, mirror.right)
    }
    if (node.right) {
      mirror.left = new TreeNode()
      reverse(node.right, mirror.left)
    }
  }
  reverse(root, res)
  return res
}

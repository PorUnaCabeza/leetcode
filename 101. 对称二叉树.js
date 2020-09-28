/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  if (!root) {
    return true
  }
  const equal = function (leftNode, rightNode) {
    if (leftNode === null && rightNode === null) {
      return true
    }
    if (leftNode === null || rightNode === null) {
      return false
    }
    if (leftNode.val !== rightNode.val) {
      return false
    } else {
      return equal(leftNode.left, rightNode.right) && equal(leftNode.right, rightNode.left)
    }
  }
  return equal(root.left, root.right)
}

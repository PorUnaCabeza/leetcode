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
var diameterOfBinaryTree = function (root) {
  let answer = 0
  const depth = function (node) {
    if (!node) {
      return 0
    }
    const leftHeight = depth(node.left)
    const rightHeight = depth(node.right)
    answer = Math.max(answer, leftHeight + rightHeight)
    return Math.max(leftHeight, rightHeight) + 1
  }
  depth(root)
  return answer
}

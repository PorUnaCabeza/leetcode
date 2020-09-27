/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  const recursive = function (root, pVal, qVal) {
    if (root.val === pVal || root.val === qVal) {
      return root
    }
    if (pVal > root.val && qVal > root.val) {
      return recursive(root.right, pVal, qVal)
    } else if (pVal < root.val && qVal < root.val) {
      return recursive(root.left, pVal, qVal)
    } else {
      return root
    }
  }
  return recursive(root, p.val, q.val)
}

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
var increasingBST = function(root) {
  let resNode = null
  let pre = null
  const dfs = function (node) {
    if (!node) {
      return
    }
    dfs(node.left)
    if (!resNode) {
      resNode = new TreeNode(node.val)
      pre = resNode
    } else {
      let newNode = new TreeNode(node.val)
      pre.right = newNode
      pre = newNode
    }
    dfs(node.right)
  }
  dfs(root)
  return resNode
};
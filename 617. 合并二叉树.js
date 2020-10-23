/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
  const mergeTree = function (node1, node2) {
    if (!node1 && !node2) {
      return null
    }
    if (node1 !== null && node2 === null) {
      return node1
    }
    if (node1 === null && node2 !== null) {
      return node2
    }
    let mergedTree = new TreeNode(node1.val + node2.val)
    mergedTree.left = mergeTree(node1.left, node2.left)
    mergedTree.right = mergeTree(node1.right, node2.right)
    return mergedTree
  }
  return mergeTree(t1, t2)
}

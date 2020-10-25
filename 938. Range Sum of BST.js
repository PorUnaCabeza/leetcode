/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const mockData = {
  val: 10,
  left: {
    val: 5,
    left: {
      val: 3
    },
    right: {
      val: 7
    }
  },
  right: {
    val: 15,
    right: {
      val: 18
    }
  }
}
var rangeSumBST = function (root, L, R) {
  let sum = 0
  const dfs = function (node) {
    if (!node) {
      return
    }
    if (node.val > R) {
      dfs(node.left)
    } else if (node.val < L) {
      dfs(node.right)
    } else {
      sum += node.val
      dfs(node.left)
      dfs(node.right)
    }
  }
  dfs(root)
  return sum
}
console.log(rangeSumBST(mockData, 7, 15))

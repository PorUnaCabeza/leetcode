/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 1、求一棵树的所有节点之和
 * 2、后续遍历
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const mockData = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4
    }
  },
  right: {
    val: 3
  }
}
var findTilt = function (root) {
  let res = 0
  const dfs = function (node) {
    if (!node) {
      return 0
    }
    const leftResult = dfs(node.left)
    const rightResult = dfs(node.right)
    const tilt = Math.abs(leftResult - rightResult)
    res+=tilt
    return node.val + leftResult + rightResult
  }
  dfs(root)
  return res
}

console.log(findTilt(mockData))

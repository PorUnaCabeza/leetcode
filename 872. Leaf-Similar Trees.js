/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const mockData = {
  val: 5,
  left: {
    val: 3,
    left: {
      val: 2
    },
    right: {
      val: 4
    }
  },
  right: {
    val: 6,
    left: {
      val: 8
    },
    right: {
      val: 7
    }
  }
}
var leafSimilar = function (root1, root2) {
  let array1 = []
  let array2 = []
  const dfs = function (node, array) {
    if (!node) {
      return
    }
    dfs(node.left, array)
    if (!node.left && !node.right) {
      array.push(node.val)
    }
    dfs(node.right, array)
  }
  dfs(root1, array1)
  dfs(root2, array2)
  return array1.join(',') === array2.join(',')
}

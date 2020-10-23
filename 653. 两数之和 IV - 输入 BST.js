/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
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
    right: {
      val: 7
    }
  }
}
/**
 * 1、BST中序遍历为递增数组
 * 2、双指针遍历递增数组
 */
var findTarget = function (root, k) {
  const array = []
  const dfs = function (node) {
    if (!node) {
      return
    }
    dfs(node.left)
    array.push(node.val)
    dfs(node.right)
  }
  dfs(root)
  let prev = 0
  let last = array.length - 1
  while (prev < last) {
    const sum = array[prev] + array[last]
    if (sum === k) {
      return true
    }
    if (sum > k) {
      last--
    }
    if (sum < k) {
      prev++
    }
  }
  return false
}

console.log(findTarget(mockData, 16))

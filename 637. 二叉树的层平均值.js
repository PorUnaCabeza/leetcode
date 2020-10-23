/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
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
var averageOfLevels = function (root) {
  const res = {}
  const dfs = function (node, level = 0) {
    if (!node) {
      return
    }
    if (!res[level]) {
      res[level] = []
    }
    res[level].push(node.val)
    dfs(node.left, level + 1)
    dfs(node.right, level + 1)
  }
  dfs(root)
  let array = []
  Object.keys(res).forEach(level => {
    let list = res[level]
    if (Array.isArray(list) && list.length > 0) {
      let avg = list.reduce((prev, next) => prev + next, 0) / list.length
      array.push(avg)
    }
  })

  return array
}

averageOfLevels(mockData)

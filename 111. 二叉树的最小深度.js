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

//[3,9,20,null,null,15,7]

const mockData = {
  val: 3,
  left: {
    val: 9
  },
  right: {
    val: 20,
    left: {
      val: 15
    },
    right: {
      val: 7
    }
  }
}

var minDepth = function (root) {
  let minHeight = Number.MAX_SAFE_INTEGER
  if (!root) {
    return 0
  }
  const dfs = function (node, height) {
    if (!node) {
      return
    }
    if (!node.left && !node.right) {
      minHeight = Math.min(minHeight, height)
      return
    }

    dfs(node.left, height + 1)
    dfs(node.right, height + 1)
  }

  dfs(root, 1)
  return minHeight
}

let res = minDepth(mockData)
console.log('res ' + res)

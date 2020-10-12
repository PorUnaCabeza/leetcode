/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

/**
 * 你需要采用前序遍历的方式，将一个二叉树转换成一个由括号和整数组成的字符串。
 * 空节点则用一对空括号 "()" 表示。而且你需要省略所有不影响字符串与原始二叉树之间的一对一映射关系的空括号对。
 * @param t
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

var tree2str = function (t) {
  let res = ''
  const bfs = function (node) {
    if (!node) {
      return ''
    }
    if (!node.left && !node.right) {
      console.log(node.val)
      return node.val + ''
    }
    res = node.val + ''
    if (node.left) {
      res += `(${bfs(node.left)})`
    } else {
      res += '()'
    }
    if (node.right) {
      res += `(${bfs(node.right)})`
    }
    return res
  }
  return bfs(t)
}

console.log(tree2str(mockData))

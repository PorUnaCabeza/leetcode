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
 * @return {number[]}
 */


const testTree = {
  val: 1,
  right: {
    val: 2,
    left: {
      val: 3
    }
  }
}

// 递归版本
var inorderTraversal = function(root) {
  let result = [];
  const dfs = function(root) {
    if (!root) {
      return;
    }
    dfs(root.left);
    result.push(root.val);
    dfs(root.right);
  }
  dfs(root);
  return result;
};

//  循环
const inorderTraversalWithLoop = function(root) {
  let current = null;
  let stack = [];
  let result = [];
  current = root;
  if (!current) {
    return [];
  }
  while(stack.length > 0 || current) {
    while (current) {
      stack.push(current);
      current = current.left;
    }
    const node = stack.pop();
    result.push(node.val);

    if (node.right) {
      current = node.right
    }
  }
  return  result;
}

console.log(inorderTraversalWithLoop(testTree))


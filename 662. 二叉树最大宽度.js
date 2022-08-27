/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
const binaryUtil = require('./utils/binaryTree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function (root) {
  let result = 1;
  let stack = [];
  let levelNodeSize = 1;
  let indexList = [1];
  const bfs = function (root) {
    stack.push(root);
    while (stack.length > 0) {
      const target = stack.shift();
      levelNodeSize--;
      if (!target) {
        continue;
      }
      const currentIndex = indexList.shift();
      if (target.left) {
        stack.push(target.left);
        indexList.push(2 * currentIndex);
      }
      if (target.right) {
        stack.push(target.right);
        indexList.push(2 * currentIndex + 1);
      }
      if (levelNodeSize === 0) {
        //下一层级，node个数
        levelNodeSize = stack.length;
        if (indexList.length > 1) {
          result = Math.max(result, indexList[indexList.length - 1] - indexList[0] + 1);
        }
      }
      if (indexList.length === 1) {
        indexList = [1];
      }
    }
  };
  bfs(root);
  return result % Number.MAX_VALUE;
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  const flat = function (root, array = []) {
    if (!root) {
      array.push(null)
      return
    }
    array.push(root.val)
    flat(root.left, array)
    flat(root.right, array)
  }
  let pArray = []
  let qArray = []
  flat(p, pArray)
  flat(q, qArray)
  return pArray.join(',') === qArray.join(',')
}

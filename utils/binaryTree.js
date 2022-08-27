function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
const array2Tree = function (array) {
  if (!array || array.length === 0) {
    return null;
  }
  let root = new TreeNode(array.shift());
  let nodeList = [root];
  while (array.length > 0) {
    let cursor = nodeList.shift();
    if (!cursor) {
      continue;
    }

    let leftVal = array.shift();
    let rightVal = array.shift();

    if (Number.isInteger(leftVal)) {
      cursor.left = new TreeNode(leftVal);
      nodeList.push(cursor.left);
    }
    if (Number.isInteger(rightVal)) {
      cursor.right = new TreeNode(rightVal);
      nodeList.push(cursor.right);
    }
  }
  return root;
};


module.exports = {
  array2Tree
}

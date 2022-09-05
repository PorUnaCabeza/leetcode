/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let result = [];

  let pathList = [];
  backTracking(1);
  function backTracking(startIndex) {
    if (pathList.length === k) {
      result.push([...pathList]);
      return;
    }
    for (let i = startIndex; i <= n; i++) {
      pathList.push(i);
      backTracking(i + 1);
      pathList.pop();
    }
  }
  return result;
};

/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {
  pairs.sort((pre, next) => pre[1] - next[1]);

  let result = 1;

  let cursor = pairs[0][1];

  for (let i = 1; i < pairs.length; i++) {
    if (cursor < pairs[i][0]) {
      result++;
      cursor = pairs[i][1];
    }
  }
  return result;
};

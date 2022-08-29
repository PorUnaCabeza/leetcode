/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let xIndex = i;
    let yIndex = n + i;
    result.push(nums[xIndex]);
    result.push(nums[yIndex]);
  }
  return result;
};

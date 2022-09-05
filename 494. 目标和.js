/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  let result = 0;

  const backTracking = function (startIndex, sum) {
    if (sum === target && startIndex === nums.length) {
      result++;
      return;
    }
    if (startIndex > nums.length) {
      return;
    }
    backTracking(startIndex + 1, sum + nums[startIndex]);
    backTracking(startIndex + 1, sum - nums[startIndex]);
  };

  backTracking(0, 0);
  return result;
};

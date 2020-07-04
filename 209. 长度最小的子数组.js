/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(s, nums) {
  if (nums.length === 0) return 0
  let windowLength = 0
  let sum = 0
  let minLength = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    windowLength++
    while (sum >= s && windowLength > 0) {
      sum -= nums[i - windowLength + 1]
      windowLength--
      if (minLength > windowLength + 1) minLength = windowLength + 1
    }
  }
  return minLength === Number.MAX_SAFE_INTEGER ? 0 : minLength
}

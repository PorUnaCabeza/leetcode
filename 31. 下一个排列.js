/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  const numLength = nums.length;
  let k = -1;
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      k = i - 1;
      break;
    }
  }
  if (k === -1) {
    return nums.reverse();
  }

  for (let r = numLength - 1, l = k + 1; l < r; r--, l++) {
    [nums[r], nums[l]] = [nums[l], nums[r]];
    console.log(JSON.stringify(nums));
  }

  console.log(JSON.stringify(nums), k);

  for (let i = k + 1; i < numLength; i++) {
    if (nums[i] > nums[k]) {
      [nums[i], nums[k]] = [nums[k], nums[i]];
      break;
    }
  }

  return nums;
};

console.log(nextPermutation([5, 4, 7, 5, 3, 2]));

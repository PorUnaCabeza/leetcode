/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */

// 双指针
var findClosestElements = function (arr, k, x) {
  let left = 0;
  let right = arr.length - 1;
  let removedLength = arr.length - k;

  for (let _ = 0; _ < removedLength; _++) {
    if (Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)) {
      right--;
    } else {
      left++;
    }
  }
  console.log(left, right)
  return arr.slice(left, right+1);
};

console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3));

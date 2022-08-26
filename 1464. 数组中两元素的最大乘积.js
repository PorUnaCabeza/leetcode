/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  const bubbleSort = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  };
  bubbleSort(nums);
  const a = nums.pop() - 1;
  const b = nums.pop() - 1;
  return a * b;
};

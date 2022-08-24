/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */

// 简单的题目就应该重拳出击👊🏻👊🏻👊🏻👊🏻
var canBeEqual = function (target, arr) {
  return target.sort().join('') === arr.sort().join('');
};

// 冒泡排序
var canBeEqual = function (target, arr) {
  const bubbleSort = function (array) {
    for (let i = 0; i < array.length - 1; i++) {
      for (let j = 0; j < array.length - 1 - i; j++) {
        if (array[j] > array[j + 1]) {
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
      }
    }
  };
  bubbleSort(target);
  bubbleSort(arr);
  return target.join('') === arr.join('');
};

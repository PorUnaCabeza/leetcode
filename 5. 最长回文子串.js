/**
 * @param {string} s
 * @return {string}
 */

let maxStr = '';

var longestPalindrome = function (s) {
  if (s.length <= 1) {
    return s;
  }
  maxStr = s[0];

  for (let i = 0; i < s.length; i++) {
    extendFromCenter(s, i, i);
    extendFromCenter(s, i, i + 1);
  }
  return maxStr;
};

const isPalindrome = function (str) {
  let i = 0;
  let j = str.length - 1;
  while (i < str.length && j >= -1 && i <= j) {
    if (str[i] === str[j]) {
      i++;
      j--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const extendFromCenter = function (str, leftCursor, rightCursor) {
  let left = leftCursor;
  let right = rightCursor;
  while (left >= 0 && right < str.length) {
    if (str[left] === str[right]) {
      left--;
      right++;
    } else {
      break;
    }
  }
  if (left === right) {
    return str[left];
  }
  const length = right - left - 1;
  if (length > maxStr.length) {
    maxStr = str.substr(left + 1, length);
  }
};

console.log(longestPalindrome('bb'));

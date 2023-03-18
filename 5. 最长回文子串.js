/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let max = 0;
  let maxStr = s[0];
  if (s.length <= 1) {
    return s;
  }

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const subString = s.substring(i, j + 1);
      if (isPalindrome(subString)) {
        if (subString.length > max) {
          max = subString.length;
          maxStr = subString
        }
      }
    }
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


console.log(longestPalindrome('bb'))

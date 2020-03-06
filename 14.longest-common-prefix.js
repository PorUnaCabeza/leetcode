//Write a function to find the longest common prefix string amongst an array of
//strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
//
//Input: ["flower","flow","flight"]
//Output: "fl"
//
//
// Example 2:
//
//
//Input: ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
//
//
// Note:
//
// All given inputs are in lowercase letters a-z.
// Related Topics String

//leetcode submit region begin(Prohibit modification and deletion)
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (!Array.isArray(strs)) return "";
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  strs.sort((a, b) => b.length - a.length);
  let maxStr = strs[0];
  let prefix = "";
  let max = 0;
  for (let i = 0; i < maxStr.length; i++) {
    let c = maxStr.substr(0, i + 1);
    let r = strs.every(str => str.startsWith(c));
    if (r) {
      prefix = c;
    }
  }
  return prefix
};
//leetcode submit region end(Prohibit modification and deletion)

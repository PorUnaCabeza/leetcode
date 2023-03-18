/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 *
 * https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 *
 * algorithms
 * Medium (29.26%)
 * Likes:    7150
 * Dislikes: 423
 * Total Accepted:    1.2M
 * Total Submissions: 4.2M
 * Testcase Example:  '"abcabcbb"'
 *
 * Given a string, find the length of the longest substring without repeating
 * characters.
 *
 *
 * Example 1:
 *
 *
 * Input: "abcabcbb"
 * Output: 3
 * Explanation: The answer is "abc", with the length of 3.
 *
 *
 *
 * Example 2:
 *
 *
 * Input: "bbbbb"
 * Output: 1
 * Explanation: The answer is "b", with the length of 1.
 *
 *
 *
 * Example 3:
 *
 *
 * Input: "pwwkew"
 * Output: 3
 * Explanation: The answer is "wke", with the length of 3.
 * ⁠            Note that the answer must be a substring, "pwke" is a
 * subsequence and not a substring.
 *
 *
 *
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  if (s.length < 2) {
    return s.length;
  }
  let left = 0;
  let right = 0;
  let max = 1;
  let hashSet = new Set();
  while(right < s.length) {
    if (hashSet.has(s[right])) {
      hashSet.delete(s[left]);
      left++;
    } else {
      max = Math.max(max, right-left + 1)
      hashSet.add(s[right]);
      right++;
    }
  }
  console.log(max)
  return max;

};


lengthOfLongestSubstring('abcadd')
// @lc code=end

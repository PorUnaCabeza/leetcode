/*
 * @lc app=leetcode id=467 lang=javascript
 *
 * [467] Unique Substrings in Wraparound String
 *
 * https://leetcode.com/problems/unique-substrings-in-wraparound-string/description/
 *
 * algorithms
 * Medium (34.66%)
 * Likes:    446
 * Dislikes: 72
 * Total Accepted:    21.5K
 * Total Submissions: 62K
 * Testcase Example:  '"a"'
 *
 * Consider the string s to be the infinite wraparound string of
 * "abcdefghijklmnopqrstuvwxyz", so s will look like this:
 * "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
 *
 * Now we have another string p. Your job is to find out how many unique
 * non-empty substrings of p are present in s. In particular, your input is the
 * string p and you need to output the number of different non-empty substrings
 * of p in the string s.
 *
 * Note: p consists of only lowercase English letters and the size of p might
 * be over 10000.
 *
 * Example 1:
 *
 * Input: "a"
 * Output: 1
 *
 * Explanation: Only the substring "a" of string "a" is in the string s.
 *
 *
 *
 * Example 2:
 *
 * Input: "cac"
 * Output: 2
 * Explanation: There are two substrings "a", "c" of string "cac" in the string
 * s.
 *
 *
 *
 * Example 3:
 *
 * Input: "zab"
 * Output: 6
 * Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of
 * string "zab" in the string s.
 *
 *
 */

// @lc code=start
/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function(p) {
  if (!p) return 0
  let count = 1
  let map = {}
  map[p.charAt(0)] = count
  for (let i = 1; i < p.length; i++) {
    let diff = p.charCodeAt(i) - p.charCodeAt(i - 1)
    if (diff === 1 || diff === -25) {
      count += 1
    } else {
      count = 1
    }
    map[p.charAt(i)] = Math.max(count, map[p.charAt(i)] || 0)
  }
  return Object.keys(map).reduce((prev, next) => prev + map[next], 0)
}
// @lc code=end

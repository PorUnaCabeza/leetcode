/*
 * @lc app=leetcode id=43 lang=javascript
 *
 * [43] Multiply Strings
 *
 * https://leetcode.com/problems/multiply-strings/description/
 *
 * algorithms
 * Medium (32.20%)
 * Likes:    1332
 * Dislikes: 628
 * Total Accepted:    244.3K
 * Total Submissions: 758.4K
 * Testcase Example:  '"2"\n"3"'
 *
 * Given two non-negative integers num1 and num2 represented as strings, return
 * the product of num1 and num2, also represented as a string.
 *
 * Example 1:
 *
 *
 * Input: num1 = "2", num2 = "3"
 * Output: "6"
 *
 * Example 2:
 *
 *
 * Input: num1 = "123", num2 = "456"
 * Output: "56088"
 *
 *
 * Note:
 *
 *
 * The length of both num1 and num2 is < 110.
 * Both num1 and num2 contain only digits 0-9.
 * Both num1 and num2 do not contain any leading zero, except the number 0
 * itself.
 * You must not use any built-in BigInteger library or convert the inputs to
 * integer directly.
 *
 *
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  const multiStr = function(charA, charB, carry = 0) {
    let r = +charA * +charB + carry
    return {
      value: (r % 10) + '',
      carry: Math.floor(r / 10)
    }
  }
  let carry = 0
  for (let i = num1.length - 1; i > -1; i--) {
    let charA = num1[i]
    for (let j = num2.length - 1; j > -1; j--) {
      let charB = num2[j]
      let r = multiStr(charA, charB, carry)
      carry = r.carry
      console.log(charA, charB,r)
    }
  }
}
multiply('123', '45')
// @lc code=end

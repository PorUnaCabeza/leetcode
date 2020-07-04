/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
  const list = s.split('')
  let stack = []
  let max = 0
  stack.push(-1)
  for (let i = 0; i < list.length; i++) {
    const c = list[i]
    if (c === '(') {
      stack.push(i)
    } else {
      stack.pop()
      if (stack.length === 0) {
        stack.push(i)
      } else {
        console.log(stack)
        max = Math.max(max, i - stack[stack.length - 1])
      }
    }
  }
  return max
}

/**
 * @param {string} s
 * @return {boolean}
 */
const BRACKET = {
  '(': ')',
  '[': ']',
  '{': '}',
  ')': '(',
  ']': '[',
  '}': '{'
}
var isValid = function (s) {
  const list = s.split('')
  const stack = []
  for (let i = 0; i < list.length; i++) {
    const c = list[i]
    if (c === '(' || c === '[' || c === '{') {
      stack.push(c)
    } else {
      const popC = stack.pop()
      if (BRACKET[c] !== popC) {
        return false
      }
    }
  }
  return stack.length === 0
}

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  if (!S) return 0
  const sList = S.split('')
  if (sList.length < 1) return 0
  const jList = J.split('')
  return sList.filter(str => jList.includes(str)).length
}

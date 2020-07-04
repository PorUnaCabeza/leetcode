/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */

const sumGaosi = function (n) {
  return ((1 + n) * n) / 2
}

const getClosedColumn = function (size, n) {
  let min = Number.MAX_SAFE_INTEGER
  let flag = 0
  for (let i = 1; i <= size; i++) {
    let sum = sumGaosi(i)
    if (n > sum && n - sum < min) {
      flag = i + 1
      min = n - sum
    }
  }
  return flag
}

const generateList = function (size, sum, index, matrix) {
  let list = []
  for (let i = size; i > 0; i--) {
    let minus = sum - i
    if (minus <= size && minus > 0) {
      list.push(matrix[minus - 1][i - 1])
    }
  }
  list = list.sort((a, b) => a - b)
  console.log(list, index)
  return list[index - 1]
}

var kthSmallest = function (matrix, k) {
  if (k === 1) return matrix[0][0]
  const size = matrix.length
  const closedColumn = getClosedColumn(size, k)
  const alreadySum = sumGaosi(closedColumn - 1)
  const minus = k - alreadySum
  const r = generateList(size, closedColumn + 1, minus, matrix)
  return r
}

const matrix = [
  [1, 3, 5],
  [6, 7, 12],
  [11, 14, 14]
]
const k = 3

kthSmallest(matrix, k)

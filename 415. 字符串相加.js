/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  const num1Length = num1.length;
  const num2Length = num2.length;
  let rightCursor = 1;
  let carry = 0;
  let result = '';
  while (rightCursor <= Math.max(num1Length, num2Length)) {
    let num1Char = rightCursor <= num1Length ? num1[num1Length - rightCursor] : '0';
    let num2Char = rightCursor <= num2Length ? num2[num2Length - rightCursor] : '0';
    let r = Number(num1Char) + Number(num2Char) + carry;
    if (r >= 10) {
      r = r % 10;
      carry = 1;
    } else {
      carry = 0;
    }
    rightCursor++;
    result = r + '' + result;
  }
  if (carry === 1) {
    result = '1' + result;
  }

  console.log(result);

  return result;

};

addStrings('11', '123')

/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  let r = [];
  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    let discount = 0;
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= price) {
        discount = prices[j];
        break;
      }
    }
    r.push(price - discount);
  }
  return r;
};

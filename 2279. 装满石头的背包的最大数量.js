/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
  let minusList = [];

  capacity.forEach((item, index) => {
    let minus = item - rocks[index];
    minusList.push(minus);
  })

  minusList.sort((a,b)=> a-b);
  let r = 0;
  for (let i = 0; i<minusList.length; i++) {
    if (additionalRocks <= 0) {
      break;
    }
    let minus = minusList[i]
    if (minus < 1) {
      r++;
      continue;
    }
    if (additionalRocks < minus) {
      break;
    }
    additionalRocks-=minus;
    r++;


  }
  return r;

};
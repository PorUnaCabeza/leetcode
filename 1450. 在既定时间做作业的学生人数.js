/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function (startTime, endTime, queryTime) {
  let r = 0;
  for (let i = 0; i < startTime.length; i++) {
    let startTimeVal = startTime[i];
    let endTimeVal = endTime[i];
    if (startTimeVal <= queryTime && endTimeVal >= queryTime) {
      r++;
    }
  }
  return r;
};

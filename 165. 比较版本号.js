/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
function compareNumberString(str1, str2) {
  if (!/\d+/.test(str1) || !/\d+/.test(str2)) {
    throw new Error('invalid input, param is not a numeric string', str1, str2);
  }

  return Number(str1) > Number(str2);
}
var compareVersion = function (version1, version2) {
  const v1Arr = version1.split('.');
  const v2Arr = version2.split('.');
  const maxLength = Math.max(v1Arr.length, v2Arr.length);
  for (let i = 0; i < maxLength; i++) {
    const v1 = v1Arr.length > i ? Number(v1Arr[i]) : 0;
    const v2 = v2Arr.length > i ? Number(v2Arr[i]) : 0;
    if (v1 === v2) {
      continue;
    }
    return v1 > v2 ? 1 : -1;
  }
  return 0;
};

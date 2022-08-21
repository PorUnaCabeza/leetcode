/**
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */

// 正产版
var isPrefixOfWord = function (sentence, searchWord) {
  const wordList = sentence.split(' ');
  if (wordList.length < 1) {
    return -1;
  }
  for (let i = 0; i < wordList.length; i++) {
    const target = wordList[i];
    if (target.startsWith(searchWord)) {
      return i + 1;
    }
  }
  return -1;
};

//双指针

var isPrefixOfWord = function (sentence, searchWord) {
  const wordList = sentence.split(' ');
  if (wordList.length < 1) {
    return -1;
  }
  for (let i = 0; i < wordList.length; i++) {
    let right = true;
    for (let j = 0; j < searchWord.length; j++) {
      if (wordList[i][j] !== searchWord[j]) {
        right = false;
      }
    }
    if (right) {
      return i + 1;
    }
  }
  return -1;
};

// const dictionary = {
//   A: 1,
//   B: 2,
//   C: 3,
//   D: 4,
//   E: 5,
//   F: 6,
//   G: 7,
//   H: 8,
//   I: 9,
//   J: 10,
//   K: 11,
//   L: 12,
//   M: 13,
//   N: 14,
//   O: 15,
//   P: 16,
//   Q: 17,
//   R: 18,
//   S: 19,
//   T: 20,
//   U: 21,
//   V: 22,
//   W: 23,
//   X: 24,
//   Y: 25,
//   Z: 26,
// };

function solution(msg) {
  const dictionary = {};
  const result = [];
  let currentIndex = 0;

  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = i + 1;
  }

  // 다음 단어가 없을 때, result에 넣어줘야 함.
  function checkDictionary(currentWord, index) {
    if (index === msg.length) {
      if (currentWord) {
        result.push(dictionary[currentWord]);
      }
      return;
    }

    const nextWord = currentWord + msg[index + 1];

    if (dictionary[nextWord]) {
      checkDictionary(nextWord, index + 1);
    } else {
      result.push(dictionary[currentWord]);
      dictionary[nextWord] = Object.keys(dictionary).length + 1;
      checkDictionary(msg[index + 1], index + 1);
    }
  }

  checkDictionary(msg[currentIndex], currentIndex);

  return result;
}

console.log(solution("KAKAO")); // [11, 1, 27, 15]

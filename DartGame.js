const str = "1D2S#10S";

let strNums = str.match(/\d+/g);
const regexScores = /S|D|T/g;
const regexOptions = /\#|\*/g;

const strScores = str.match(regexScores);
const strOptions = str.match(regexOptions);

strNums = strNums.map(Number);
strScores;
strOptions;

for (let i = 0; i < 3; i++) {
  if (strScores[i] === "S") {
    continue;
  } else if (strScores[i] === "D") {
    strNums[i] = strNums[i] * strNums[i];
  } else if (strScores[i] === "T") {
    strNums[i] = strNums[i] * strNums[i] * strNums[i];
  }
}

for (let i = 0; i < str.length; i++) {
  if (str[i] === "*") {
  } else if (str[i] === "#") {
  }
}

strNums;

const sum = strNums.reduce((a, c) => (a += c), 0);

console.log(sum);

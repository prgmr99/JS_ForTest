function solution(s) {
  let firstCnt = 1;
  let secondCnt = 0;
  let currentIndex = 0;

  const result = [];

  const strSplit = s.split("");
  let char = `${strSplit[0]}`;

  for (let i = 1; i < strSplit.length; i++) {
    const x = strSplit[currentIndex];
    if (x === strSplit[i]) {
      firstCnt += 1;
      char += strSplit[i];
    } else if (x !== strSplit[i]) {
      secondCnt += 1;
      char += strSplit[i];
      if (firstCnt === secondCnt) {
        currentIndex = i + 1;
        result.push(char);
        char = "";
      }
    }
  }

  if (char.length !== 0) {
    result.push(char);
  }

  return result.length;
}

function solution(X, Y) {
  let result = 0;

  let xArr = X.split("").map(Number);
  let yArr = Y.split("").map(Number);
  let temp = [...yArr];

  const xCntArr = Array(10).fill(0);
  const yCntArr = Array(10).fill(0);
  const temp2 = Array(10).fill(0);

  for (let i = 0; i < xArr.length; i++) {
    xCntArr[xArr[i]]++;
  }

  for (let i = 0; i < yArr.length; i++) {
    yCntArr[yArr[i]]++;
  }

  for (let i = 0; i < 10; i++) {
    temp2[i] = xCntArr[i] > yCntArr[i] ? yCntArr[i] : xCntArr[i];
  }

  let str = "";
  for (let i = 0; i < 10; i++) {
    if (temp2[i] !== 0) {
      const elem = i.toString();
      str += elem.repeat(temp2[i]);
    }
  }

  const answer = str
    .split("")
    .map(Number)
    .sort((a, b) => b - a);

  if (answer[0] === 0) {
    result = "0";
  } else if (answer.length === 0) {
    result = "-1";
  } else {
    result = answer.join("");
  }

  return result;
}

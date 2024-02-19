function solution(dartResult) {
  const result = [];
  let temp = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = +dartResult[i];
      }
    } else if (dartResult[i] === "S") {
      result.push(temp);
    } else if (dartResult[i] === "D") {
      result.push(Math.pow(temp, 2));
    } else if (dartResult[i] === "T") {
      result.push(Math.pow(temp, 3));
    } else if (dartResult[i] === "#") {
      result[result.length - 1] *= -1;
    } else if (dartResult[i] === "*") {
      result[result.length - 1] *= 2;
      result[result.length - 2] *= 2;
    }
  }

  const sum = result.reduce((a, c) => (a += c), 0);

  return sum;
}

function solution(s, n) {
  const big = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const small = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      result += " ";
      continue;
    }
    const textArr = big.includes(s[i]) ? big : small;
    let index = textArr.indexOf(s[i]) + n;
    if (index >= textArr.length) {
      index -= textArr.length;
    }
    result += textArr[index];
  }

  return result;
}

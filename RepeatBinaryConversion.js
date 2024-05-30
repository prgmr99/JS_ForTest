function solution(s) {
  let numOfZero = 0;
  let cnt = 0;
  let result = s;
  let strLen = result.length;

  while (result !== "1") {
    let num = result.split("0").join("").length;
    numOfZero += result.length - num;
    cnt++;
    result = num.toString(2);
  }
  return [cnt, numOfZero];
}

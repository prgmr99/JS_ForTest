function solution(s) {
  const splitNumbers = s.split(" ");
  const sortedArr = splitNumbers.sort((a, b) => a - b);
  let answer = "";
  answer += sortedArr[0] + " " + sortedArr[sortedArr.length - 1];
  return answer;
}

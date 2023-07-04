function solution(array) {
  let arr = array.join("");
  let cnt = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "7") {
      cnt++;
    }
  }
  return cnt;
}

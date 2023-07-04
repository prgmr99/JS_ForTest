function solution(s) {
  let arr = s.split(" ");
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Z") {
      sum -= parseInt(arr[i - 1], 10);
    } else {
      sum += parseInt(arr[i], 10);
    }
  }
  return sum;
}

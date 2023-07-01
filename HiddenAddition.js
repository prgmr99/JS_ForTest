function solution(my_string) {
  const arr = my_string.split("");
  let arr2 = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= "1" && arr[i] <= "9") {
      sum += Number(arr[i]);
    } else {
    }
  }
  return sum;
}

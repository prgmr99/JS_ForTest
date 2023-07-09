function solution(my_str, n) {
  let strArr = my_str.split("");

  let ans = [];

  while (strArr.length > 0) {
    ans.push(strArr.splice(0, n).join(""));
  }

  return ans;
}

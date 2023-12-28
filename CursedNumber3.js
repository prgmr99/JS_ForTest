function solution(n) {
  let i = 1; // 10
  let j = 1; // 3x

  while (i < n) {
    const temp = j.toString();
    const check = temp.split("").includes("3");
    j++;
    while (j % 3 === 0 || j.toString().split("").includes("3")) {
      j++;
    }

    i++;
  }
  return j;
}

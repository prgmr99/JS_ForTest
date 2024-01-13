function solution(n) {
  let sum = 0;
  const temp2 = n
    .toString()
    .split("")
    .map((e) => {
      return Number(e);
    });

  for (let i = 0; i < temp2.length; i++) {
    sum += temp2[i];
  }

  return sum;
}

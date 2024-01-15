function solution(n) {
  const str = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  return +str.map((e) => Number(e)).join("");
}

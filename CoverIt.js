function solution(n, m, section) {
  const temp = section[section.length - 1] - section[0] + 1;

  return Math.ceil(temp / m);
}

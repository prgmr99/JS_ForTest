function solution(sides) {
  let answer = 0;
  const side1 = sides[0];
  const side2 = sides[1];
  const longSide = side1 > side2 ? side1 : side2;
  const sumSide = side1 + side2;
  const base = Math.abs(side1 - side2);

  answer += longSide - base;

  for (let i = longSide + 1; i < sumSide; i++) {
    answer += 1;
  }

  return answer;
}

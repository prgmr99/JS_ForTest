function solution(number, limit, power) {
  const list = [];
  let sum = 0;

  // 1부터 number까지의 약수의 개수
  for (let i = 1; i < number + 1; i++) {
    let count = 0;
    let num = 1;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        // i가 j로 나누어떨어진다면 j와 i/j가 약수
        count += j === i / j ? 1 : 2;
      }
    }
    list.push(count);
  }

  const listLimited = list.map((e) => {
    if (e > limit) {
      sum += power;
      return power;
    } else {
      sum += e;
      return e;
    }
  });

  return sum;
}

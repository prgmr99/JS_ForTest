function solution(a, b) {
  let sum = 0;
  let start = a;
  let end = b;

  if (a > b) {
    start = b;
    end = a;
  }
  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// 이 특성은 지난번에 배운적이 있는 특성
function adder(a, b) {
  var result = 0;
  return ((a + b) * (Math.abs(a - b) + 1)) / 2;
}

// 내 코드에서 발전하면 아래와 같이
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}

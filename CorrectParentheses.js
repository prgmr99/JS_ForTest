// 효율성까진 챙기지 않은 코드
function solution(s) {
  const list = s.split("");
  const stack = [];

  if (list[0] === ")" || list[list.length - 1] === "(") {
    return false;
  }

  while (list.length > 0) {
    const elem = list.shift();
    if (elem === "(") {
      stack.push(elem);
    } else if (elem === ")") {
      stack.pop();
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}

// 효율성까지 챙긴 코드
function solution(s) {
  let balance = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      balance++;
    } else if (s[i] === ")") {
      balance--;

      if (balance < 0) {
        return false;
      }
    }
  }

  return balance === 0;
}

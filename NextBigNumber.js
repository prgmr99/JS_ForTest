function solution(n) {
  const converted = n.toString(2);
  const nConditionTwo = converted.split("0").join("").length;
  let nextNum = n + 1;

  while (true) {
    const convertedNext = nextNum.toString(2);
    const nextConditionTwo = convertedNext.split("0").join("").length;
    if (nConditionTwo === nextConditionTwo) {
      break;
    }
    nextNum++;
  }

  return nextNum;
}

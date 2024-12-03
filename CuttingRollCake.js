function solution(topping) {
  const leftSet = new Set();
  const rightSet = new Set();
  const leftUniqueCount = [];
  const rightUniqueCount = [];

  for (let i = 0; i < topping.length; i++) {
    leftSet.add(topping[i]);
    leftUniqueCount[i] = leftSet.size;
  }

  for (let i = topping.length - 1; i >= 0; i--) {
    rightSet.add(topping[i]);
    rightUniqueCount[i] = rightSet.size;
  }

  let count = 0;
  for (let i = 0; i < topping.length - 1; i++) {
    if (leftUniqueCount[i] === rightUniqueCount[i + 1]) {
      count++;
    }
  }

  return count;
}

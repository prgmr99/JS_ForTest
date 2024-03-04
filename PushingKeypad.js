function solution(numbers, hand) {
  let result = "";

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    0: [3, 1],
    "*": [3, 0],
    "#": [3, 2],
  };

  const leftArr = [1, 4, 7];
  const rightArr = [3, 6, 9];
  let currentLeft = "*";
  let currentRight = "#";
  let distLeft = -1;
  let distRight = -1;

  for (let i = 0; i < numbers.length; i++) {
    if (leftArr.includes(numbers[i])) {
      currentLeft = numbers[i];
      result += "L";
    } else if (rightArr.includes(numbers[i])) {
      currentRight = numbers[i];
      result += "R";
    } else {
      const num = keypad[numbers[i]];
      const leftNum = keypad[currentLeft];
      const rightNum = keypad[currentRight];
      distLeft = Math.sqrt(
        Math.pow(leftNum[0] - num[0], 2) + Math.pow(leftNum[1] - num[1], 2)
      );
      distRight = Math.sqrt(
        Math.pow(rightNum[0] - num[0], 2) + Math.pow(rightNum[1] - num[1], 2)
      );

      if (distLeft === distRight) {
        if (hand === "right") {
          result += "R";
          currentRight = numbers[i];
        } else if (hand === "left") {
          result += "L";
          currentLeft = numbers[i];
        }
      } else if (distLeft > distRight) {
        result += "R";
        currentRight = numbers[i];
      } else if (distLeft < distRight) {
        result += "L";
        currentLeft = numbers[i];
      }
    }
  }

  return result;
}

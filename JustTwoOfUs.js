function solution(s, skip, index) {
  const arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const manipulatedArr = arr.filter((v) => !skip.includes(v));
  const sArr = s.split("");
  const result = [];

  for (let i = 0; i < sArr.length; i++) {
    const charIndex = manipulatedArr.indexOf(sArr[i]);

    if (charIndex + index >= manipulatedArr.length) {
      const len = (charIndex + index) % manipulatedArr.length;
      result.push(manipulatedArr[len]);
    } else {
      result.push(manipulatedArr[charIndex + index]);
    }
  }

  return result.join("");
}

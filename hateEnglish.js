function solution(numbers) {
  const arr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++) {
    numbers = numbers.split(arr[i]).join(i);
  }

  return Number(numbers);
}

function solution(babbling) {
  let cnt = 0;
  const arr = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let temp = babbling[i];
    for (let j = 0; j < arr.length; j++) {
      if (temp.includes(arr[j].repeat(2))) {
        break;
      }
      temp = temp.split(arr[j]).join(" "); // 공백은 옹알이(1)에서 사용했던 'X'와 동일한 역할이다.
    }
    if (temp.split(" ").join("").length === 0) {
      cnt++;
    }
  }
  return cnt;
}

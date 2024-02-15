function solution(babbling) {
  let cnt = 0;
  const arr = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let temp = babbling[i];
    for (let j = 0; j < arr.length; j++) {
      if (temp.includes(arr[j].repeat(2))) {
        break;
      }
      temp = temp.split(arr[j]).join(" ");
    }
    if (temp.split(" ").join("").length === 0) {
      cnt++;
    }
  }
  return cnt;
}

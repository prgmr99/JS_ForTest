function solution(my_string) {
  let answer = 0;
  let arr = [];
  const temp2 = my_string.split(" ").map((e) => {
    if (!isNaN(e)) {
      return Number(e);
    } else {
      arr.push(e);
      return e;
    }
  });

  const temp = temp2.filter((e) => e !== "+" && e !== "-");
  const num1 = temp.shift();
  answer = num1;

  while (temp.length !== 0) {
    const num = temp.shift();
    const oper = arr.shift();
    if (oper === "+") {
      answer += num;
    } else {
      answer -= num;
    }
  }
  return answer;
}

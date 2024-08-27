function solution(s) {
  let count = 0;
  const arr = s.split("");

  const validationCheck = (arr) => {
    const stack = [];
    const openArr = ["[", "(", "{"];
    const closeArr = ["]", ")", "}"];

    if (closeArr.includes(arr[0])) return false;

    // forEach를 사용ㅎ면 return이 안되서 for of로 변경
    for (let e of arr) {
      if (openArr.includes(e)) {
        stack.push(e);
      } else if (closeArr.includes(e)) {
        if (stack.length === 0) return false;

        const lastOpen = stack.pop();
        if (
          (e === ")" && lastOpen !== "(") ||
          (e === "]" && lastOpen !== "[") ||
          (e === "}" && lastOpen !== "{")
        ) {
          return false;
        }
      }
    }

    return stack.length === 0;
  };

  for (let i = 0; i < arr.length; i++) {
    arr.push(arr.shift());
    if (validationCheck(arr)) {
      count++;
    }
  }
  return count;
}

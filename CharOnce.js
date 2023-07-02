// 나의 풀이
function solution(s) {
  let arr = s.split("");
  let arr2 = [...arr];
  let str = "";
  arr.sort();
  arr2.sort();

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr2[i] = "0";
        arr2[j] = "0";
      }
      if (arr2[i] === "0") continue;
    }
  }
  console.log(arr2);
  for (let i = 0; i < arr.length; i++) {
    if (arr2[i] !== "0") {
      str += arr2[i];
    }
  }
  console.log(str);
  return str;
}

// 다른 사람의 풀이
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

// lastIndexOf() 함수는 특정 요소의 마지막 인덱스를 따지는 것이다.
// 동일한 요소가 존재할 경우 인덱스가 서로 달라지므로 res에 push될 수 없다.

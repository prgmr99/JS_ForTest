// 내 풀이
function solution(s) {
  let str2 = s.split(" ");
  let result = "";
  let arr = [];

  for (let i = 0; i < str2.length; i++) {
    let str3 = "";
    for (let j = 0; j < str2[i].length; j++) {
      if (j % 2 !== 0) {
        str3 += str2[i][j].toLowerCase();
      } else {
        str3 += str2[i][j].toUpperCase();
      }
    }
    arr.push(str3);
  }

  result = arr.join(" ");
  return result;
}

// 내 풀이
function solution(strings, n) {
  const temp = [];
  const result = [];

  for (let i = 0; i < strings.length; i++) {
    const temp2 = [];

    temp2.push(strings[i][n]);
    temp2.push(strings[i]);

    temp.push(temp2);
  }

  temp.sort();

  for (let i = 0; i < strings.length; i++) {
    result.push(temp[i][1]);
  }

  return result;
}

function solution(strings, n) {
  // strings 배열
  // n 번째 문자열 비교
  return strings.sort((s1, s2) =>
    s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n])
  );
}

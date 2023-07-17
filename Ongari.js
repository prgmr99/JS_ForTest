function solution(babbling) {
  // 해당 풀이는 StarBlitz님의 풀이를 해석하였음을 미리 밝힙니다.
  let count = 0;
  // 연속되는 경우
  let dup = ["ayaaya", "yeye", "woowoo", "mama"];
  while (babbling.length) {
    let b = babbling.pop();
    // 연속되는 발음은 패스
    if (dup.some((v) => b.includes(v))) continue;
    // 가능한 발음을 모두 숫자로 바꾸어
    b = b
      .replaceAll("aya", "1")
      .replaceAll("ye", "2")
      .replaceAll("woo", "3")
      .replaceAll("ma", "4");
    // 숫자는 공백으로 변환
    b = b.replace(/[1234]/g, "");
    // 모두 가능한 발음의 경우 count++
    if (b.length === 0) count++;
  }

  return count;
}

function solution(babbling) {
  let answer = 0;

  // forEach() 메서드로 babbling을 하나씩 확인합니다.
  for (let word of babbling) {
    // 정규식을 이용하여 연속된 같은 발음이 있는지 체크합니다.
    // 연속된 같은 발음이 있다면 continue를 통해 다음 단어로 넘어갑니다.
    if (/(aya|ye|woo|ma)\1+/g.test(word)) continue;

    // 정규식을 이용해 발음할 수 있는 단어만 있는지 체크합니다.
    // 발음할 수 있는 단어만 있다면 answer을 1 증가시킵니다.
    if (/^(aya|ye|woo|ma)+$/g.test(word)) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2

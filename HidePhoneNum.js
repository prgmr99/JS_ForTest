function solution(phone_number) {
  // 전화번호의 뒷 4자리를 제외한 부분을 *로 대체
  const hiddenPart = "*".repeat(phone_number.length - 4);
  // 뒷 4자리를 가져와서 뒤에 이어붙임
  const visiblePart = phone_number.slice(-4);

  return hiddenPart + visiblePart;
}

// 내 풀이
function solution(phone_number) {
  let num = phone_number;
  for (let i = 0; i < num.length - 4; i++) {
    num = num.replace(num[i], "*");
  }
  return num;
}

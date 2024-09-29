function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const dictionary = [];

  // 단어를 재귀적으로 생성하는 함수
  function generateWords(currentWord) {
    // 최대 길이가 5인 단어만 생성
    if (currentWord.length > 5) return;

    // 현재 단어를 사전에 추가
    dictionary.push(currentWord);

    // 각 모음을 더해서 새로운 단어 생성
    for (let i = 0; i < vowels.length; i++) {
      generateWords(currentWord + vowels[i]);
    }
  }

  // 빈 문자열에서부터 단어 생성 시작
  generateWords("");

  // 사전 순서로 정렬
  dictionary.sort();

  // 해당 단어가 사전에서 몇 번째에 위치하는지 반환
  return dictionary.indexOf(word);
}

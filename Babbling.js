function solution(babbling) {
  const ableWords = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (let i = 0; i < babbling.length; i++) {
    let t = babbling[i];
    for (let j = 0; j < ableWords.length; j++) {
      if (t.includes(ableWords[j])) {
        t = t.replace(ableWords[j], "X");
      }
    }
    t = t.replace(/X/gi, "");
    if (t.length === 0) {
      answer++;
    }
  }
  return answer;
}

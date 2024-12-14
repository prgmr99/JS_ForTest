// n: 진법, t: 미리 구할 숫자의 갯수, m: 게임에 참가하는 인원, p: 튜브의 순서

function solution(n, t, m, p) {
  // t * m 만큼 게임이 진행되는 것을 알 수 있고, t * m 만큼 진행하면서 t개를 찾아야 함.
  // 한 자리여야 하기 때문에 split을 해서 한자리 배열로 만들어줘야 해.

  const totalGame = t * m;
  const answers = [];
  const answersForTube = [];

  for (let i = 0; i < totalGame; i++) {
    const convertedNumber = i.toString(n).split("");
    answers.push(...convertedNumber);
  }

  for (let i = p - 1; i < answers.length; i += m) {
    answersForTube.push(answers[i]);
  }

  return answersForTube.join("").toUpperCase().slice(0, t);
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"

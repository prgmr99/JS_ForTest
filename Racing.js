function solution(players, callings) {
  const playerIndexMap = new Map();

  // 선수들의 초기 등수를 Map에 기록
  players.forEach((player, index) => {
    playerIndexMap.set(player, index);
  });

  for (const called of callings) {
    const currentIndex = playerIndexMap.get(called);

    if (currentIndex > 0) {
      // 이미 1등인 경우는 처리할 필요 없음
      const prevPlayer = players[currentIndex - 1];

      // 선수들의 위치를 교환
      players[currentIndex - 1] = called;
      players[currentIndex] = prevPlayer;

      // Map에서 선수들의 등수 업데이트
      playerIndexMap.set(called, currentIndex - 1);
      playerIndexMap.set(prevPlayer, currentIndex);
    }
  }

  return players;
}

// 시간초과 발생
// for(let i = 0;i < callings.length;i++) {
//   const index = players.indexOf(callings[i]);
//   const temp = players[index];
//   players[index] = players[index - 1];
//   players[index - 1] = temp;
// }

// players;

// while(callings.length !== 0) {
//   const temp = callings.shift();
//   const index = players.indexOf(temp);
//   players[index] = players[index - 1];
//   players[index - 1] = temp;
// }

// players;

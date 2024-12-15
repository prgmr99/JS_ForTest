// U: 위쪽으로 한 칸 가기
// D: 아래쪽으로 한 칸 가기
// R: 오른쪽으로 한 칸 가기
// L: 왼쪽으로 한 칸 가기

// 캐릭터는 좌표평면의 (0, 0) 위치에서 시작
// 좌표평면의 경계는 왼쪽 위(-5,5) 왼쪽 아래(-5, -5) 오른쪽 위(5, 5) 오른쪽 아래(5, -5)
// 이때, 우리는 게임 캐릭터가 지나간 길 중 캐릭터가 처음 걸어본 길의 길이를 구하려고 합니다.
// 예를 들어 위의 예시에서 게임 캐릭터가 움직인 길이는 9이지만,
// 캐릭터가 처음 걸어본 길의 길이는 7이 됩니다.
// (8, 9번 명령어에서 움직인 길은 2, 3번 명령어에서 이미 거쳐 간 길입니다)

// 단, 좌표평면의 경계를 넘어가는 명령어는 무시합니다.
// 명령어가 매개변수 dirs로 주어질 때,
// 게임 캐릭터가 처음 걸어본 길의 길이를 구하여 return 하는 solution 함수를 완성해 주세요.

function solution(dirs) {
  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const visited = new Set();
  let x = 0;
  let y = 0;
  let totalLength = 0;

  for (const dir of dirs) {
    const [dx, dy] = move[dir];
    const nx = x + dx;
    const ny = y + dy;

    if (nx < -5 || nx > 5 || ny < -5 || ny > 5) {
      continue;
    }

    const path = `${x}${y}${nx}${ny}`;
    const reversePath = `${nx}${ny}${x}${y}`;

    if (!visited.has(path) && !visited.has(reversePath)) {
      visited.add(path);
      visited.add(reversePath);
      totalLength++;
    }

    x = nx;
    y = ny;
  }

  return totalLength;
}

console.log(solution("ULURRDLLU")); // 7

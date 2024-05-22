const park = ["SOO", "OXX", "OOO"];
const routes = ["E 2", "S 2", "W 1"];
// result = [2,1]
let [x, y] = [0, 0];
let current = [x, y];
const obstacles = {};

// park 좌표로 변환
const parkCord = park.map((e) => e.split(""));

// 시작 지점, 장애물 찾는 코드
for (let i = 0; i < parkCord.length; i++) {
  for (let j = 0; j < parkCord[i].length; j++) {
    if (parkCord[i][j] === "S") {
      [x, y] = [i, j];
    }
    if (parkCord[i][j] === "X") {
      const key = i;
      const value = j;

      if (obstacles[key]) {
        // 키가 이미 존재하면 값 배열에 추가
        obstacles[key].push(value);
      } else {
        // 키가 없으면 새 배열로 추가
        obstacles[key] = [value];
      }
    }
  }
}
current[1];
obstacles[current[1]];

// 경로 이동
outerloop: for (let i = 0; i < routes.length; i++) {
  let previous = current;
  if (routes[i][0] === "E") {
    for (let j = 0; j < +routes[i][2]; j++) {
      if (current[1] > park[0].length - 1) {
        // 이탈 조건 추가
        currrent = previous;
        continue outerloop;
      }
      if (obstacles[current[0]]?.includes(current[1])) {
        currrent = previous;
        continue outerloop;
      } else {
        current[1] += 1;
      }
    }
  } else if (routes[i][0] === "W") {
    for (let j = 0; j < +routes[i][2]; j++) {
      if (current[1] < 0) {
        // 이탈 조건 추가
        currrent = previous;
        continue outerloop;
      }
      if (obstacles[current[0]]?.includes(current[1])) {
        currrent = previous;
        continue outerloop;
      } else {
        current[1] -= 1;
      }
    }
  } else if (routes[i][0] === "S") {
    for (let j = 0; j < +routes[i][2]; j++) {
      if (current[0] > park.length - 1) {
        // 이탈 조건 추가
        currrent = previous;
        continue outerloop;
      }
      if (obstacles[current[0]]?.includes(current[1])) {
        currrent = previous;
        continue outerloop;
      } else {
        current[0] += 1;
      }
    }
  } else if (routes[i][0] === "N") {
    for (let j = 0; j < +routes[i][2]; j++) {
      if (current[0] < 0) {
        // 이탈 조건 추가
        currrent = previous;
        continue outerloop;
      }
      if (obstacles[current[0]]?.includes(current[1])) {
        currrent = previous;
        continue outerloop;
      } else {
        current[0] -= 1;
      }
    }
  }
}

current;

// 내 풀이
function solution(food) {
  const list = [];

  for (let i = 1; i < food.length; i++) {
    if (food[i] % 2 !== 0) {
      food[i] -= 1;
    }
    for (let j = 0; j < food[i] / 2; j++) {
      list.push(i);
    }
  }
  const list2 = [...list].reverse().join("");

  return list.join("") + "0" + list2;
}

// 다른 사람 풀이
// repeat을 결국 사용함.

function solution(food) {
  let res = "";
  for (let i = 1; i < food.length; i++) {
    res += String(i).repeat(Math.floor(food[i] / 2));
  }

  return res + "0" + [...res].reverse().join("");
}

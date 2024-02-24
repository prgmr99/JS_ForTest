function solution(n, lost, reserve) {
  let result = 0;
  let copyLost = [...lost];
  let copyReserve = [...reserve];

  // 답: n - lost의 남는 길이

  copyLost = copyLost.filter((v) => !reserve.includes(v));
  copyReserve = copyReserve.filter((v) => !lost.includes(v));

  const clear = Array(copyLost.length).fill(false);

  for (let i = 0; i < copyLost.length; i++) {
    if (copyReserve.includes(copyLost[i] - 1)) {
      clear[i] = true;
      copyReserve.splice(copyReserve.indexOf(copyLost[i] - 1), 1);
    } else if (copyReserve.includes(copyLost[i] + 1)) {
      clear[i] = true;
      copyReserve.splice(copyReserve.indexOf(copyLost[i] + 1), 1);
    }
  }

  const len = clear.filter((v) => v !== true).length;

  result = n - len;
  return result;
}

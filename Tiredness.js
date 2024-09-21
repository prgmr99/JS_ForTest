function solution(k, dungeons) {
  let energy = k;
  let count = 0;

  dungeons.sort((a, b) => b[0] - a[0]);

  dungeons.forEach((item) => {
    if (energy >= item[1]) {
      energy -= item[1];
      count++;
    }
  });

  return count;
}

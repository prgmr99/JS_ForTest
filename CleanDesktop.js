function solution(wallpaper) {
  const temp = wallpaper.map((e, i) => {
    if (e.includes("#")) {
      const first = e.indexOf("#");
      const last = e.lastIndexOf("#");
      return [first, last, i];
    } else {
      return;
    }
  });

  const column1Arr = [];
  const column2Arr = [];
  const heightArr = [];

  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== undefined) {
      column1Arr.push(temp[i][0]);
      column2Arr.push(temp[i][1]);
      heightArr.push(temp[i][2]);
    }
  }

  const minY = Math.min.apply(null, heightArr);
  const minX = Math.min.apply(null, column1Arr);
  const maxY = Math.max.apply(null, heightArr);
  const maxX = Math.max.apply(null, column2Arr);

  return [minY, minX, maxY + 1, maxX + 1];
}

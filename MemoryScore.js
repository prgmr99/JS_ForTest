function solution(name, yearning, photo) {
  const obj = {};
  let sum = 0;
  const result = [];

  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  photo.forEach((e) => {
    sum = 0;
    e.forEach((v) => {
      if (obj.hasOwnProperty(v)) {
        sum += obj[v];
      }
    });
    result.push(sum);
  });

  return result;
}

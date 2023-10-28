function solution(spell, dic) {
  let arr = [];
  let sortedArr = [];
  const sortedSpell = spell.sort().join("");
  arr = dic.map((e) => {
    return e.split("");
  });
  for (let i = 0; i < arr.length; i++) {
    sortedArr.push(arr[i].sort().join(""));
  }

  if (sortedArr.includes(sortedSpell)) {
    return 1;
  }
  return 2;
}

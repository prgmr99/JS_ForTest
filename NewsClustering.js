function solution(str1, str2) {
  const makeMultiSet = (str) => {
    const multiSet = [];
    for (let i = 0; i < str.length - 1; i++) {
      const word = (str[i] + str[i + 1]).toLowerCase();
      if (/^[a-z]{2}$/.test(word)) multiSet.push(word);
    }
    return multiSet;
  };

  const arr1 = makeMultiSet(str1);
  const arr2 = makeMultiSet(str2);

  const map1 = new Map();
  const map2 = new Map();

  arr1.forEach((item) => map1.set(item, (map1.get(item) || 0) + 1));
  arr2.forEach((item) => map2.set(item, (map2.get(item) || 0) + 1));

  let intersectionSize = 0;
  let unionSize = 0;

  const allKeys = new Set([...map1.keys(), ...map2.keys()]);
  allKeys.forEach((key) => {
    const count1 = map1.get(key) || 0;
    const count2 = map2.get(key) || 0;
    intersectionSize += Math.min(count1, count2);
    unionSize += Math.max(count1, count2);
  });
  const similarity = unionSize === 0 ? 1 : intersectionSize / unionSize;

  return Math.floor(similarity * 65536);
}

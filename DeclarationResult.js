function solution(id_list, report, k) {
  const reportObj = {};
  const newSet = new Set(report);
  const newArr = [...newSet];
  const manipulatedArr = newArr.map((e) => e.split(" "));

  manipulatedArr.forEach((e) => {
    reportObj[e[1]] = [];
  });

  for (let i = 0; i < manipulatedArr.length; i++) {
    reportObj[manipulatedArr[i][1]].push(manipulatedArr[i][0]);
  }

  const keys = Object.keys(reportObj);
  const filteredKeys = keys.filter((key) => reportObj[key].length >= k);
  const filteredObject = filteredKeys.reduce((obj, key) => {
    obj[key] = reportObj[key];
    return obj;
  }, {});

  const userCount = {};
  id_list.forEach((e) => {
    userCount[e] = 0;
  });

  for (let obj in filteredObject) {
    filteredObject[obj].map((e) => (userCount[e] += 1));
  }

  const valuesArray = Object.values(userCount);

  return valuesArray;
}

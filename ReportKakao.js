function solution(id_list, report, k) {
  const reportToObj = report.map((item) => {
    const [key, value] = item.split(" ");
    return { [key]: value };
  });
  console.log(reportToObj);

  const removeSame = reportToObj.reduce((acc, curr) => {
    const [key, value] = Object.entries(curr)[0];
    if (acc[key] === value) return acc;

    if (Array.isArray(acc[key])) {
      if (!acc[key].includes(value)) acc[key].push(value);
    } else {
      acc[key] = [value];
    }
    return acc;
  }, {});
  console.log(removeSame);

  const countReport = {};

  for (const key in removeSame) {
    //console.log(key);
    const values = removeSame[key];
    //console.log(values);
    values.forEach((value) => {
      if (countReport[value]) countReport[value]++;
      else countReport[value] = 1;
    });
  }
  console.log(countReport);

  const countArr = Object.entries(countReport);
  const filteredArr = countArr.filter(([key, value]) => value >= k);
  console.log(filteredArr);
  const objFilteredArr = Object.fromEntries(filteredArr);
  console.log(objFilteredArr);

  const result = {};

  for (const key in objFilteredArr) {
    console.log(key);
    for (const key2 in removeSame) {
      //console.log(key2);
    }
  }

  console.log(result);
}

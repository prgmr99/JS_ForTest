function solution(participant, completion) {
  let test2 = [...completion];
  const test = participant.map((e) => {
    if (test2.includes(e)) {
      const index = test2.indexOf(e);
      if (test2.splice(index, 1) !== -1) {
        return "";
      }
    }
    return e;
  });

  const sortedTest = test.sort();
  return sortedTest[sortedTest.length - 1];
}

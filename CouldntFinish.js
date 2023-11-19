function mySolution(participant, completion) {
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

function helpSolution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

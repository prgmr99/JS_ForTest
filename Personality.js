function solution(survey, choices) {
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let str = "";

  const temp = survey.map((e, i) => {
    const [key1, key2] = e.split("");
    if (choices[i] >= 5) {
      types2[key2] += choices[i] - 4;
    } else if (choices[i] <= 3) {
      types2[key1] += Math.abs(choices[i] - 4);
    }
    return types2;
  });

  str += types2["R"] >= types2["T"] ? "R" : "T";
  str += types2["C"] >= types2["F"] ? "C" : "F";
  str += types2["J"] >= types2["M"] ? "J" : "M";
  str += types2["A"] >= types2["N"] ? "A" : "N";
  return str;
}

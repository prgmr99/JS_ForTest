const keymap = ["ABACD", "BCEFD"];
const targets = ["ABCD", "AABB"];
// result = [9,4];

const result = [];

const splittedTargets = targets.map((v) => {
  return v.split("");
});

const splittedKeymap = keymap.map((v) => {
  return v.split("");
});

splittedKeymap;
splittedTargets;

for (let i = 0; i < splittedTargets.length; i++) {
  let sum = 0;
  for (let j = 0; j < splittedTargets[i].length; j++) {
    for (let k = 0; k < keymap.length; k++) {
      let min = 101;
      if (keymap[k].includes(splittedTargets[i][j])) {
        if (keymap[k].indexOf(splittedTargets[i][j]) < min) {
          min = keymap[k].indexOf(splittedTargets[i][j]);
        }
        console.log(min);
      } else {
        continue;
      }
      sum += min;
    }
  }
  result.push(sum);
}

result;

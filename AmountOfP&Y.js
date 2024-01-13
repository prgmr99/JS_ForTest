function solution(s) {
  const test = s.split("");

  let cntP = 0;
  let cntY = 0;

  for (let i = 0; i < test.length; i++) {
    if (test[i] === "p" || test[i] === "P") {
      cntP += 1;
    } else if (test[i] === "y" || test[i] === "Y") {
      cntY += 1;
    }
  }

  if (cntP !== cntY) {
    return false;
  }

  return true;
}

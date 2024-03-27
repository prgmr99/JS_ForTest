function solution(new_id) {
  let step1 = new_id.toLowerCase();
  const regex = /[a-z | 0-9 | \- | \_ | \.]/g;
  step1 = step1.match(regex).join("");

  step1 = step1.replaceAll(/\.{2,}/g, ".");

  if (step1[0] === ".") {
    step1 = step1.slice(1);
  }
  if (step1[step1.length - 1] === ".") {
    step1 = step1.slice(0, step1.length - 1);
  }

  if (step1 === "") {
    step1 += "a";
  }

  if (step1.length > 15) {
    step1 = step1.slice(0, 15);
    if (step1[step1.length - 1] === ".") {
      step1 = step1.slice(0, 14);
    }
  }

  if (step1.length < 3) {
    while (step1.length < 3) {
      step1 += step1[step1.length - 1];
    }
  }

  return step1;
}

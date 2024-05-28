function solution(s) {
  let copyS = "";
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      copyS += s[i].toUpperCase();
    }
    if (s[i] !== " " && s[i - 1] === " " && i > 0) {
      copyS += s[i].toUpperCase();
    } else if (i !== 0) {
      copyS += s[i].toLowerCase();
    }
  }
  return copyS;
}

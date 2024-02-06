function solution(answers) {
  let student1 = "12345";
  let student2 = "21232425";
  let student3 = "3311224455";
  const result = [];
  const len = answers.length;

  const len1 = Math.floor(len / student1.length);
  const left1 = len % student1.length;
  student1 = student1.repeat(len1) + student1.slice(0, left1);

  const len2 = Math.floor(len / student2.length);
  const left2 = len % student2.length;
  student2 = student2.repeat(len2) + student2.slice(0, left2);

  const len3 = Math.floor(len / student3.length);
  const left3 = len % student3.length;
  student3 = student3.repeat(len3) + student3.slice(0, left3);

  student1 = student1.split("").map((e) => Number(e));
  student2 = student2.split("").map((e) => Number(e));
  student3 = student3.split("").map((e) => Number(e));

  student1 = student1.filter((v, i) => v === answers[i]);
  student2 = student2.filter((v, i) => v === answers[i]);
  student3 = student3.filter((v, i) => v === answers[i]);

  const maxNum = Math.max(student1.length, student2.length, student3.length);

  if (student1.length === maxNum) {
    result.push(1);
  }
  if (student2.length === maxNum) {
    result.push(2);
  }
  if (student3.length === maxNum) {
    result.push(3);
  }
  return result;
}

// 다른 사람 풀이
function solution(answers) {
  var answer = [];
  var a1 = [1, 2, 3, 4, 5];
  var a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  var a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  var a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  var a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  var a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  var max = Math.max(a1c, a2c, a3c);

  if (a1c === max) {
    answer.push(1);
  }
  if (a2c === max) {
    answer.push(2);
  }
  if (a3c === max) {
    answer.push(3);
  }

  return answer;
}

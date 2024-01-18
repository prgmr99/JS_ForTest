// 내 풀이
function solution(arr1, arr2) {
  let arr3 = [[]];

  for (let i = 0; i < arr1.length; i++) {
    arr3[i] = [];
    for (let j = 0; j < arr1[0].length; j++) {
      arr3[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return arr3;
}

// 다른 사람 풀이
function solution(arr1, arr2) {
  var answer = [];

  for (let i = 0; i < arr1.length; i++) {
    //[1,2][2,3]
    let sum = [];
    for (let j = 0; j < arr1[i].length; j++) {
      //arr1 안의 배열의 길이 (2번)
      sum.push(arr1[i][j] + arr2[i][j]); // 1번째 1+3, 2번째 2+4 / 3번째 2+5 4번째 3+6
    }
    answer.push(sum); // [4,6],[7,9]
  }
  return answer;
}

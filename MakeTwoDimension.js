// 2차원으로 만들기
// slice를 통해서 해결함.

function solution(num_list, n) {
  let newArr = [];
  for (let i = 0; i < num_list.length; i += n) {
    newArr.push(num_list.slice(i, i + n));
  }
  return newArr;
}

function solution(arr1, arr2) {
  const rows1 = arr1.length;
  const cols2 = arr2[0].length;
  const result = Array.from({ length: rows1 }, () => Array(cols2).fill(0));

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr1[0].length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      result[i][j] = sum;
    }
  }

  return result;
}

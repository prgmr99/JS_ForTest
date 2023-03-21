function solution(array, n) {
  array.sort((a, b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

  return array[0];
}

/**
 * 내 풀이
 * function solution(array, n) {
    let answer = 0;
    let arr = [];
    let min = 101;
    array.map((e) => {
        let diff = Math.abs(n-e);
        if(diff < min) {
            answer = e;
            min = diff;
        }
    })
    array.map((e) => {
        let diff = Math.abs(n-e);
        if(diff === Math.abs(answer - n)) {
            arr.push(e);
        }
    })
    arr.sort();
    if(arr.length >= 2) {
        return arr[0];
    }
    else {
        return answer;
    }
}
 */

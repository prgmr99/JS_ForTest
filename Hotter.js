function solution(scoville, K) {
  var answer = 0;
  var heap = [];

  for (let i = 0; i < scoville.length; i++) {
    heap.push(scoville[i]);
  }

  heap.sort((a, b) => a - b);

  while (heap[0] < K) {
    if (heap.length < 2) return -1;

    let first = heap.shift();
    let second = heap.shift();

    heap.unshift(first + second * 2);
    heap.sort((a, b) => a - b);
    answer++;
  }

  return answer;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2

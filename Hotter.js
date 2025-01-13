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


// 2차
function solution(scoville, K) {
    var answer = 0;

    scoville.sort((a, b) => a - b);
    const newScoville = [];
    
    // scoville 배열의 인덱스
    let index1 = 0; 
    // newScoville 배열의 인덱스
    let index2 = 0; 

    // 2개의 리스트를 합쳐서 작은 값 찾기
    const findMin = () => {
        const a = scoville[index1];
        const b = newScoville[index2];

        if (a === undefined) return newScoville[index2++];
        if (b === undefined) return scoville[index1++];
        
        return a < b ? scoville[index1++] : newScoville[index2++];
    }

    // 조리가 가능 할때 까지
    while(scoville.length - index1 + newScoville.length - index2 > 0) {

        // 가장 안 매운 음식이 K 이상일 때
        const min1 = findMin();
        if (min1 >= K) return answer;

        // 마지막 남은 요리가 K보다 안 매웠을 때
        const min2 = findMin();
        if(min2 === undefined) return -1;

        // 새로운 요리를 만들어 newScoville에 추가
        const mix = min1 + min2 * 2;
        newScoville.push(mix);
        answer++;
    }
    
    return answer;
}

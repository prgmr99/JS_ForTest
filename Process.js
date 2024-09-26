function solution(priorities, location) {
  const arr = [...priorities];
  let index = location;
  let answer = 0;

  while (index !== 0) {
    // 대기중인 프로세스 하나 꺼내기
    const process = arr.shift();

    // 더 높은 프로세스 유무 확인 과정
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > process) {
        arr.push(process);

        if (index === 0) {
          index += arr.length - 1;
        }
      }
    }

    if (index > 0) {
      index -= 1;
    } else if (index === 0) {
      answer = priorities.length - arr.length + 1;
      break;
    }
  }
  return answer;
}

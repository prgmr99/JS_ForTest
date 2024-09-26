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

// 2차

function solution(priorities, location) {
  let arr = priorities.map((priority, index) => ({ priority, index }));
  let answer = 0;

  while (arr.length > 0) {
    const process = arr.shift();

    if (arr.some((doc) => doc.priority > process.priority)) {
      arr.push(process); // 우선순위가 높은 문서가 있으면 뒤로 보냄
    } else {
      answer += 1; // 현재 문서를 출력함

      if (process.index === location) {
        return answer; // 찾던 문서라면 출력 순서 반환
      }
    }
  }
  return answer;
}

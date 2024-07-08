function solution(k, tangerine) {
    let answer = 0;
    let type = k;
    const cntObj = {};
    const arr = [];
    
    // 각 요소의 개수를 세어 cntObj에 저장
    for (let i = 0; i < tangerine.length; i++) {
        cntObj[tangerine[i]] = 0;
    }
    
    tangerine.forEach(e => {
        cntObj[e]++;
    });
    
    // cntObj의 값만 모아 배열로 변환
    for (const key in cntObj) {
        arr.push(cntObj[key]);
    }
    
    // 배열을 내림차순으로 정렬
    const sortedArr = arr.sort((a, b) => b - a);
    console.log(sortedArr);
    
    // 정렬된 배열에서 k개의 타입을 선택하기 위해 반복
    for (let i = 0; i < sortedArr.length; i++) {
        if (type > 0) {
            const num = sortedArr[i];
            type -= num;
            answer++;
        } else {
            break;
        }
    }
    
    return answer;
}
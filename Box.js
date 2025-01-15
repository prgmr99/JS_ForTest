// order = [4,3,1,2,5]
// result = 2

// order.length <= 1,000,000
// 즉, 이중반복문은 안된다.

function solution(order) {
    let answer = 0;
    const subContainer = [];

    for(let i = 0;i < order.length;i++) {
        if(order[i] !== i + 1) {
            subContainer.push(order[i]);
        } else if(order[i] === i + 1) {
            answer++;
        }
        
        if(subContainer[subContainer.length - 1] === i + 1) {
            subContainer.pop();
            answer++;
        }
    }

    return answer;
}

console.log(solution([4,3,1,2,5])); // 2
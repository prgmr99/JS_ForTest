// order = [4,3,1,2,5]
// result = 2

// order.length <= 1,000,000
// 즉, 이중반복문은 안된다.

function solution(order) {
    let answer = 0;
    const subContainer = [];
    let current = 1;

    for (let i = 0; i < order.length; i++) {
        while (current <= order.length && (subContainer.length === 0 || subContainer[subContainer.length - 1] !== order[i])) {
            subContainer.push(current);
            current++;
        }

        if (subContainer[subContainer.length - 1] === order[i]) {
            subContainer.pop();
            answer++;
        } else {
            break;
        }
    }

    return answer;
}

console.log(solution([4,3,1,2,5])); // 2
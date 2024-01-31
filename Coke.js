function solution(a, b, n) {
    if (n < a) {
    	// a가 더 큰 경우, 0이 최종적으로 합산되어 결과가 나오게 됩니다.
        return 0;
    } 
    else {
    	// 빈 병을 가져다주고 받는 콜라의 병 개수를 계산합니다.
        let sum = Math.floor(n / a) * b;
        
        /* 
        계산한 콜라의 개수를 재귀 함수를 통해 계속 누적해서 더해줍니다.
        solution(a, b, n)에서 n의 자리에 n을 a로 나눈 나머지와 위에서 계산한 sum을 합산하여
        파라미터로 전달해줍니다.
        */
        return sum + solution(a, b, n % a + sum);
    }
}
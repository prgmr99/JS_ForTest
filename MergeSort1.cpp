#include <iostream>

using namespace std;

int inputCnt = 0;

/*merge_sort(A[p..r]) { // A[p..r]을 오름차순 정렬한다.
    if (p < r) then {
        q <- ⌊(p + r) / 2⌋;       // q는 p, r의 중간 지점
        merge_sort(A, p, q);      // 전반부 정렬
        merge_sort(A, q + 1, r);  // 후반부 정렬
        merge(A, p, q, r);        // 병합
    }
}

// A[p..q]와 A[q+1..r]을 병합하여 A[p..r]을 오름차순 정렬된 상태로 만든다.
// A[p..q]와 A[q+1..r]은 이미 오름차순으로 정렬되어 있다.
merge(A[], p, q, r) {
    i <- p; j <- q + 1; t <- 1;
    while (i <= q and j <= r) {
        if (A[i] <= A[j])
        then tmp[t++] <- A[i++]; # tmp[t] <- A[i]; t++; i++;
        else tmp[t++] <- A[j++]; # tmp[t] <- A[j]; t++; j++;
    }
    while (i ≤ q)  // 왼쪽 배열 부분이 남은 경우
        tmp[t++] <- A[i++];
    while (j ≤ r)  // 오른쪽 배열 부분이 남은 경우
        tmp[t++] <- A[j++];
    i <- p; t <- 1;
    while (i ≤ r)  // 결과를 A[p..r]에 저장
        A[i++] <- tmp[t++];
}*/

void merge(int *arr, int p, int q, int r, int K) {
    int i = p, j = q + 1, t = 1;
    int temp[r+2];
    while(i <= q && j <= r) {
        if(arr[i] <= arr[j])
            temp[t++] = arr[i++];
        else
            temp[t++] = arr[j++];
    }
    while(i<=q)
        temp[t++] = arr[i++];
    while(j<=r)
        temp[t++] = arr[j++];
    i = p;
    t = 1;
    while(i <= r){
        arr[i++] = temp[t++];
        if(++inputCnt == K)
            cout << temp[t-1] << '\n';
    }
}

void merge_sort(int *arr, int start, int end, int K) {
    int q, p = start, r = end;
    if(p < r) {
        q = (p + r) / 2;
        merge_sort(arr, p, q, K);
        merge_sort(arr, q + 1, r, K);
        merge(arr, p, q, r, K);
    }
}


int main(void) {
    int N, K;
    cin >> N >> K;
    
    int *Arr = new int[N];
    
    for(int i=0;i<N;i++) {
        cin >> Arr[i];
    }
    merge_sort(Arr, 0, N-1, K);
    if(inputCnt < K)
        cout << -1;
    
    //for(int i=0;i<N;i++) {
        //cout << Arr[i] << ' ';
    //}
    return 0;
}

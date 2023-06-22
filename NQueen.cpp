#include <iostream>
#include <algorithm>

using namespace std;

int N = 0;
int CNT = 0;
int ARR[16];

bool promising(int num) {
    int index = 0;
    bool check = true;

    while(index < num) {
        if(ARR[index] == ARR[num] || abs(ARR[num] - ARR[index]) == num - index) 
            check = false;
        index++;
    }
    return check;
}

void queens(int num) {
    int j;
    
    if(num == N)
        CNT++;
    else {
        for(int i = 0;i < N;i++) {
            ARR[num] = i;
            if(promising(num))
                queens(num + 1);
        }
    }
}

int main(void) {
    // N 입력
    cin >> N;

    // queen 함수 실행
    queens(0);

    // 결과 출력
    cout << CNT << '\n';
}

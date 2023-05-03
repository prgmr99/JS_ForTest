#include <iostream>

using namespace std;

int CNT = 0;
int fib(int n) {
    if(n==1 || n==2) {
        return 1;
    }
    else {
        CNT++;
        return fib(n-1) + fib(n-2);
    }
}

int fibonacci(int n) {
    int f[n];
    int cnt = 0;
    f[1] = f[2] = 1;
    for(int i=3;i<=n;i++) {
        cnt++;
        f[i] = f[i-1] + f[i-2];
    }
        
    return cnt;
}

int main(void) {
    int N;
    cin >> N;
    fib(N);
    cout << CNT+1<< ' ' <<fibonacci(N) << '\n';
    return 0;
}

#include <iostream>

using namespace std;

long fact(long num) {
    if(num < 1)
        return 1;
    else
        return num * fact(num-1);
}

int main(void) {
    int N;
    cin >> N;
    
    cout << fact(N) << '\n';
    return 0;
}

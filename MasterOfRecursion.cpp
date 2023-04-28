#include <iostream>
#include <cstring>


using namespace std;

int CNT = 0;

int recursion(const char *s, int l, int r){
    CNT++;
    if(l >= r) return 1;
    else if(s[l] != s[r]) return 0;
    else {
        return recursion(s, l+1, r-1);
    }
}

int isPalindrome(const char *s){
    return recursion(s, 0, strlen(s)-1);
}

int main(){
    int T;
    cin >> T;
    char str[1001];
    for(int i = 0;i < T;i++) {
        CNT = 0;
        cin >> str;
        cout << isPalindrome(str) << " " << CNT << '\n';
    }
}


#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> v1;


int bs(int low, int high, int num) {
    int cnt = 0;
    int mid = (low+high)/2;
    if(low > high) return 0;
    else {
        if(v1[mid] == num) {
            int temp = mid;
            while(v1[temp++] == num) {
                cnt++;
            }
            return cnt;
        }
        else if(v1[mid] > num) {
            return bs(low, mid-1, num);
        }
        else {
            return bs(mid+1,high, num);
        }
    }
}

int main(void) {
    ios_base::sync_with_stdio(0);
    cin.tie(0);

    int N; int M;
    cin >> N;
    for(int i=0;i<N;i++) {
        int n;
        cin >> n;
        v1.push_back(n);
    }
    sort(v1.begin(), v1.end());

    cin >> M;
    for(int i=0;i<M;i++) {
        int n;
        cin >> n;
        
        cout << bs(0, N-1, n) << ' ';
    }
    return 0;
}
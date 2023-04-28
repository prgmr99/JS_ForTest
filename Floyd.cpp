#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int main(void) {
    int n,m;
    cin >> n;
    cin >> m;
    int arr[n][n];
    //int temp[n+1][n+1];
    
    for(int i = 0;i < m;i++) {
        int a,b,c;
        cin >> a >> b >> c;
    
        arr[a-1][b-1] = c;
        //temp[a][b] = c;
        
    }
    cout << '\n';
    for(int i = 0;i < n;i++) {
        for(int j = 0;j < n;j++) {
            if(i == j)
                cout << '0' << ' ';
            else
                cout << arr[i][j] << ' ';
        }
        cout << '\n';
    }
    cout << '\n';
    cout << arr[2][5] << '\n';
    return 0;
}

#include <iostream>

using namespace std;

int N, M;
bool check[9] = {false,};
int Narr[9];

void DFS(int num, int depth) {
    if(depth == M - 1) {
        for(int i=0;i<M;i++) {
            cout << Narr[i] << ' ';
        }
        cout << '\n';
        return ;
    }
    
    for(int i = num;i<=N;i++) {
        if(!check[i]) {
            //check[i] = true;
            Narr[depth + 1] = i;
            DFS(i, depth + 1);
            check[i] = false;
        }
    }
}

int main(void) {
    cin >> N >> M;
    
    // 헤드노드부터 시작
    // 헤드노드 아래 자식 노드 처리하기 위한 DFS 실행
    for(int i = 1;i<=N;i++) {
        //check[i] = true;
        Narr[0] = i;
        DFS(i,0);
        
    }
    
    return 0;
}

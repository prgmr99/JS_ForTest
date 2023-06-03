#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int Arr[9][4];
int arr[9];
int arr2[9];
int CNT = 0;
vector<pair<int, int> > p;

struct Card {
    int top;
    int right;
    int bottom;
    int left;
    int rotation = 0;
};

Card cards[9];

void rotate(Card& card) {
    int temp = card.top;
    card.top = card.right;
    card.right = card.bottom;
    card.bottom = card.left;
    card.left = temp;

    card.rotation = (card.rotation + 1) % 4;
}


// DFS로 하기 때문에 이전에 생각했던 것처럼 한 번의 경우에 모든 경우를 고려하지 않아도 된다.
// Rotation을 하는 것도 backtracking
bool canMatch1(Card& card1, Card& card2) {
    bool check = false;
    for(int i=0;i<4;i++) {
        if((card1.right == p[i].first && card2.left == p[i].second) ||
        (card1.right == p[i].second && card2.left == p[i].first))
            check = true;
    }
    return check;
}

bool canMatch2(Card& card1, Card& card2) {
    bool check = false;
    for(int i=0;i<4;i++) {
        if((card1.bottom == p[i].first && card2.top == p[i].second) ||
        (card1.bottom == p[i].second && card2.top == p[i].first))
            check = true;
    }
    return check;
}

bool checking(int index) {
    bool check = false;
    int k = 0;

    if(index == 0) {
        return true;
    }
    else if(index == 1 || index == 2) {
        // 왼쪽과 오른쪽의 값들이 pair들의 값과 동일하다.
        if(canMatch1(cards[arr[index-1]], cards[arr[index]]))
            check = true;
    }
    else if(index == 3 || index == 6) {
        // 위쪽과 아래쪽의 값들이 pair들의 값과 동일하다.
        if(canMatch2(cards[arr[index-3]], cards[arr[index]]))
            check = true;
    }
    else if(index == 4 || index == 5 || index == 7 || index == 8) {
        // 위쪽과 아래쪽의 값들이 pair들의 값과 동일하다.
        // 왼쪽과 오른쪽의 값들이 pair들의 값과 동일하다.
        if(canMatch1(cards[arr[index-1]], cards[arr[index]]) &&
        canMatch2(cards[arr[index-3]], cards[arr[index]]))
            check = true;
    }
    else
        check = false;

    return check;
}


// promising function
bool promising(int index) {
    int k = 0;
    bool check = true;

    while(k < index && check) {
        // false가 되는 조건을 찾아야 함.
        // 조건1. 이전에 등장했던 값이면 안된다.
        // 조건2. 새로운 수를 arr배열에 추가할 때, pair를 이루지 못한다면 안된다.
        // pair를 이루지 못하는 경우보다 pair를 이루는 경우를 구하고 나머지를 false하는 것이 좋다고 판단
        // k보다 index를 이제 우선적으로 따져야 하는 이유는 index 이제 막 드려가려고 하는 칸
        if(arr[k] == arr[index] || !checking(index))
            check = false;
        k++;
    }

    
    return check;
}

// DFS function
// index는 3x3을 봤을 때, 각 칸을 가리키는 것
void DFS(int index) {
    // 끝에 도달했을 경우
    if(index == 9) {
        CNT++;
        for(int i=0;i<9;i++) {
            cout << arr[i] + 1 << "(" << arr2[i] << ")" << " ";
        }
        cout << '\n';
        return;
    }

    // 이런 식으로 가지를 만드는 것이 가장 적합한 것 같음.
    for(int i=0;i<9;i++) {
        for(int j=0;j<4;j++) {
            arr[index] = i;
            arr2[index] = cards[arr[index]].rotation;
            if(promising(index))
                DFS(index+1);
            rotate(cards[arr[index]]);
        }
    }
}


int main(void) {
    // 짝을 pair를 통해서 구현
    p.push_back(make_pair(1,2));
    p.push_back(make_pair(3,4));
    p.push_back(make_pair(5,6));
    p.push_back(make_pair(7,8));

    // 1부터 9까지의 카드를 입력
    for(int i=0;i<9;i++) {
        for(int j=0;j<4;j++) {
            cin >> Arr[i][j];
        }
    }
    
    // 구조체 배열 초기화
    for(int i=0;i<9;i++) {
        cards[i].top = Arr[i][0];
        cards[i].right = Arr[i][1];
        cards[i].bottom = Arr[i][2];
        cards[i].left = Arr[i][3];
        cards[i].rotation = 0;
    }

    // 카드 조합찾기 시작
    DFS(0);

    // 조합의 경우의 수 출력
    cout << CNT << '\n';

    return 0;
}


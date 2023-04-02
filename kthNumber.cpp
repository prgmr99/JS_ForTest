#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

vector<int> solution(vector<int> array, vector<vector<int> > commands) {
    vector<int> answer;
    
    for(int i=0;i<commands.size();i++)
    {
        vector<int> clone; // array의 i~j까지의 수를 넣어 줄것임.
        
        for(int j=commands[i][0]-1;j<=commands[i][1]-1;j++) // clone으로 array를 복사
            clone.push_back(array[j]);
        
        sort(clone.begin(),clone.end()); // clone 정렬
        answer.push_back(clone[commands[i][2]-1]); // k번째 수 획득
    }
    
    return answer;
}

/*int main(void) {
    vector<int> v1(4, 0);
    vector<vector<int> > v2(2, v1);

    cout << v2.size() << '\n';
    
    return 0;
}*/
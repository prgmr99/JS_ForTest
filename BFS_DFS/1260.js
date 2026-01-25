const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 1. 입력 처리
const [N, M, V] = input[0].split(" ").map(Number);
const edges = input.slice(1).map((line) => line.split(" ").map(Number));

// 2. 그래프 생성 (인접 리스트)
// 정점 번호가 1~N이므로 인덱스 편의를 위해 N+1 크기로 생성
const graph = Array.from({ length: N + 1 }, () => []);

// 양방향 간선 연결
edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

// [
//   [],             // 인덱스 0: 정점 번호가 1부터 시작하므로 비워둠
//   [ 2, 3, 4 ],    // 인덱스 1: 1번 정점은 2, 3, 4번과 연결됨
//   [ 1, 4 ],       // 인덱스 2: 2번 정점은 1, 4번과 연결됨
//   [ 1, 4 ],       // 인덱스 3: 3번 정점은 1, 4번과 연결됨
//   [ 1, 2, 3 ]     // 인덱스 4: 4번 정점은 1, 2, 3번과 연결됨
// ]

// 3. 문제 조건: "정점 번호가 작은 것을 먼저 방문"
// 각 정점의 인접 리스트를 오름차순으로 정렬
graph.forEach((adj) => adj.sort((a, b) => a - b));

// 4. DFS
const visitedDFS = Array(N + 1).fill(false);
const dfsResult = [];

function dfs(node) {
  visitedDFS[node] = true;
  dfsResult.push(node);

  for (const nextNode of graph[node]) {
    if (!visitedDFS[nextNode]) {
      dfs(nextNode);
    }
  }
}

dfs(V);

// 5. BFS
const visitedBFS = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(startNode) {
  const queue = [startNode];
  visitedBFS[startNode] = true;

  while (queue.length > 0) {
    const node = queue.shift(); // 큐의 앞에서 하나 꺼냄
    bfsResult.push(node);

    for (const nextNode of graph[node]) {
      if (!visitedBFS[nextNode]) {
        visitedBFS[nextNode] = true;
        queue.push(nextNode); // 방문하지 않은 인접 노드를 큐에 추가
      }
    }
  }
}

bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));

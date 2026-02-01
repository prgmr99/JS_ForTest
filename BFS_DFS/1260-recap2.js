const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const edges = input.slice(1).map((line) => line.split(" ").map(Number));

const graph = Array.from({ length: N + 1 }, () => []);

edges.forEach(([from, to]) => {
  graph[from].push(to);
  graph[to].push(from);
});

graph.forEach((adj) => adj.sort((a, b) => a - b));

// [
//     [],
//     [2,3,4],
//     [4],
//     [4],
//     [1,2,3]
// ]

const dfsVisitedArr = Array(N + 1).fill(false);
const dfsResult = [];

function dfs(node) {
  dfsVisitedArr[node] = true;
  dfsResult.push(node);

  for (const element of graph[node]) {
    if (!dfsVisitedArr[element]) {
      dfs(element);
    }
  }
}

dfs(V);

const bfsVisitedArr = Array(N + 1).fill(false);
const bfsResult = [];

function bfs(node) {
  const queue = [node];
  bfsVisitedArr[node] = true;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    bfsResult.push(currentNode);

    for (const element of graph[currentNode]) {
      if (!bfsVisitedArr[element]) {
        bfsVisitedArr[element] = true;
        queue.push(element);
      }
    }
  }
}

bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));

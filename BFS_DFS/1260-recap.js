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
const dfsResultArr = [];

function dfs(node) {
  dfsVisitedArr[node] = true;
  dfsResultArr.push(node);

  for (const element of graph[node]) {
    if (!dfsVisitedArr[element]) {
      dfs(element);
    }
  }
}

dfs(V);

const bfsVisitedArr = Array(N + 1).fill(false);
const bfsResultArr = [];

function bfs(node) {
  const queue = [node];
  bfsVisitedArr[node] = true;

  while (queue.length > 0) {
    const element = queue.shift();
    bfsResultArr.push(element);

    for (const elem of graph[element]) {
      if (!bfsVisitedArr[elem]) {
        bfsVisitedArr[elem] = true;
        queue.push(elem);
      }
    }
  }
}

bfs(V);

console.log(dfsResultArr.join(" "));
console.log(bfsResultArr.join(" "));

function solution(n, wires) {
  let answer = Infinity; // 최소 차이를 저장할 변수

  // 인접 리스트를 이용해 그래프를 표현
  const graph = Array.from({ length: n + 1 }, () => []);

  // 간선 정보로 그래프 구성
  wires.forEach(([v1, v2]) => {
    graph[v1].push(v2);
    graph[v2].push(v1);
  });

  // 서브트리의 크기를 구하는 함수 (DFS 사용)
  function countNodes(v, visited) {
    visited[v] = true; // 현재 노드 방문 처리
    let count = 1; // 현재 노드를 포함한 개수
    for (let next of graph[v]) {
      if (!visited[next]) {
        count += countNodes(next, visited); // 재귀적으로 자식 노드들의 개수 더하기
      }
    }
    return count;
  }

  // 각 간선을 하나씩 끊어서 두 서브트리로 나누는 시도
  for (let [v1, v2] of wires) {
    const visited = Array(n + 1).fill(false); // 방문 여부 체크 배열

    // 간선을 끊고, 하나의 서브트리 크기를 구함
    visited[v2] = true; // 간선을 끊는 효과를 내기 위해 한쪽을 방문한 것으로 처리
    const subtreeSize = countNodes(v1, visited); // 한쪽 서브트리 크기 구하기

    // 두 서브트리의 크기 차이를 계산
    const diff = Math.abs(subtreeSize - (n - subtreeSize));
    answer = Math.min(answer, diff); // 최소 차이 업데이트
  }

  return answer; // 최소 차이 반환
}

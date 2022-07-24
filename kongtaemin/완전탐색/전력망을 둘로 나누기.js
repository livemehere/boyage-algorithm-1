function solution(n, wires) {
  var answer = Number.MAX_SAFE_INTEGER;
  let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let visited = Array.from(Array(n + 1), () => 0);
  let cnt = 1;

  for (let [a, b] of wires) {
    graph[a][b] = 1;
    graph[b][a] = 1;
  }

  function DFS(l) {
    for (let i = 1; i <= n; i++) {
      if (visited[i] === 0 && graph[l][i] === 1) {
        visited[l] = 1;
        cnt++;
        DFS(i);
        visited[l] = 0;
      }
    }
  }

  for (let [a, b] of wires) {
    graph[a][b] = 0;
    graph[b][a] = 0;
    cnt = 1;
    DFS(1);
    graph[a][b] = 1;
    graph[b][a] = 1;
    answer = Math.min(answer, Math.abs(n - cnt - cnt));
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);

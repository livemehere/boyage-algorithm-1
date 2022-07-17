function solution(k, dungeons) {
  var answer = -1;
  let n = dungeons.length;
  let check = Array.from({ length: n }, () => 0);

  function DFS(v, stemina, cnt) {
    for (let i = 0; i < n; i++) {
      if (check[i] === 0 && dungeons[i][0] <= stemina) {
        check[i] = 1; // 던전 입장
        DFS(i, stemina - dungeons[i][1], cnt + 1);
        check[i] = 0;
      } else {
        answer = Math.max(answer, cnt);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (k >= dungeons[i][0]) {
      check[i] = 1; // 던전 입장
      DFS(i, k - dungeons[i][1], 1);
      check[i] = 0;
    }
  }

  return answer;
}

console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
);

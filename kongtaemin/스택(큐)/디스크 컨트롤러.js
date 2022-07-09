function solution(jobs) {
  let answer = 0;
  let queue = [];
  let i = 0;
  let now = 0;
  jobs.sort((a, b) => a[0] - b[0]);

  while (queue.length > 0 || jobs.length > i) {
    if (i < jobs.length && jobs[i][0] <= now) {
      queue.push(jobs[i++]); // 가장 시작시간이 빠른거 를 우선순위 큐에 넣는다.
      continue;
    }
    queue.sort((a, b) => a[1] - b[1]); // 남은 것들 중 작업시간이 적은 순서대로 정렬한다.
    if (queue.length > 0) {
      const job = queue.shift();
      now += job[1];
      answer += now - job[0];
    } else {
      now = jobs[i][0];
    }
  }

  return Math.floor(answer / jobs.length);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6],
  ])
);

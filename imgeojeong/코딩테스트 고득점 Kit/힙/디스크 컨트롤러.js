function solution(jobs) {
  var answer = 0;
  let q = [];

  jobs.sort((u, v) => {
    return u[0] - v[0];
  });

  let len = jobs.length;
  let i = 0;
  let now = 0; // 현재 시간
  while (i < len || q.length > 0) {
    if (i < len && jobs[i][0] <= now) {
      q.push(jobs[i++]);
      continue;
    }
    // q를 작업 수행시간 별로 정렬
    q.sort((u, v) => {
      return u[1] - v[1];
    });

    if (q.length > 0) {
      // q가 있으면
      let job = q.shift(); // job는 q의 젤 앞에 원소
      now += job[1]; // now에다가 job의 작업 수행시간을 더한다.
      answer += now - job[0];
    } else {
      now = jobs[i][0]; // q가 없으면 요청의 시간 순으로 실행
    }
  }

  return Math.floor(answer / len);
}

console.log(
  solution([
    [0, 3],
    [1, 9],
    [2, 6]
  ])
);

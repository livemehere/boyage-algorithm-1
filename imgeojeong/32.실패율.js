function solution(N, stages) {
  var answer = [];
  const failure = [];

  let reach = 0;
  let fail = 0;

  for (let i = 1; i <= N; i++) {
    fail = 0;
    reach = 0;
    for (let j = 0; j < stages.length; j++) {
      if (stages[j] == i) {
        fail++;
      }
      if (stages[j] >= i) {
        reach++;
      }
    }

    failure.push({ stage: i, failure: fail / reach });
  }
  failure.sort((a, b) => b.failure - a.failure);

  answer = failure.map((i) => i.stage);

  return answer;
}

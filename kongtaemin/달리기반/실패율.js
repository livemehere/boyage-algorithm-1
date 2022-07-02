function solution(N, stages) {
  let answer = 0;
  let ratios = [];

  for (let i = 1; i <= N; i++) {
    const stayUsers = stages.filter((s) => s === i).length;
    const passUsers = stages.filter((s) => s > i).length;
    const ratio = stayUsers / (stayUsers + passUsers);

    ratios.push([i, ratio]);
  }

  answer = ratios.sort((a, b) => b[1] - a[1]).map((r) => r[0]);

  return answer;
}

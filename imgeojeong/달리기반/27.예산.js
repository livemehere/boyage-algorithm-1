function solution(d, budget) {
  let answer = 0;
  let count = 0;
  d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget < d[i]) {
      return (answer = count);
    }
    budget -= d[i];
    count++;
  }
  return (answer = count);
}

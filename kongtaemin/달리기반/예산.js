function solution(d, budget) {
  let cnt = 0;
  d = d.sort((a, b) => a - b);
  for (let x of d) {
    budget -= x;
    if (budget >= 0) {
      cnt++;
    } else {
      break;
    }
  }
  return cnt;
}

function solution(priorities, location) {
  let cnt = 0;
  priorities = priorities.map((p, idx) => [p, idx]);
  while (true) {
    const curr = priorities.shift();
    const found = priorities.find((p) => p[0] > curr[0]);
    if (found) {
      priorities.push(curr);
    } else {
      cnt++;
      if (curr[1] === location) {
        break;
      }
    }
  }
  return cnt;
}

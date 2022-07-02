function solution(p, c) {
  let answer = '';

  p.sort();
  c.sort();
  // 정렬한 후 비교해서 없으면 더한다.
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== c[i]) {
      return (answer += p[i]);
    }
  }
}

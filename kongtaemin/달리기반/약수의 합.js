function solution(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let answer = 1 + n; //1, 자기자신

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }

  return answer;
}

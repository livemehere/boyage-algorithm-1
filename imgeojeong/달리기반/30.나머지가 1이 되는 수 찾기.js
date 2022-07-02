function solution(n) {
  let answer = 0;

  for (let i = n - 1; i > 1; i--) {
    answer = n % i == 1 ? i : answer;
  }

  return answer;
}

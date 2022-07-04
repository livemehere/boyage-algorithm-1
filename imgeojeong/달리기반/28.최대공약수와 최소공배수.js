function solution(n, m) {
  let answer = [];
  let gcd = 1;
  let lcm;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      gcd = i;
    }
  }
  answer.push(gcd);
  lcm = (m * n) / gcd;
  answer.push(lcm);

  return answer;
}

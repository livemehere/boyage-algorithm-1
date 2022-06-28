function solution(n, m) {
  if (m > n) [n, m] = [m, n]; // 항상 n > m 이도록 합니다.

  let gcd = getGcd(n, m); // 유클리드 호제법은 큰수에서 작은수를 나눕니다
  let lcm = (n * m) / gcd; // 두수의 곱 = 최소공배수 * 최대공약수 임을 이항하여 구합니다.

  return [gcd, lcm];
}

function getGcd(a, b) {
  if (a % b === 0) return b; // 나머지가 0 이라면 나눈 수가 최대공약수 입니다.

  return getGcd(b, a % b); // 나눈수, 나머지 를 가지고 재귀합니다.
}

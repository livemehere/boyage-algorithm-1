function solution(n) {
  return "수박".repeat(Math.ceil(n / 2)).slice(0, n); // 수박을 n/2 번만큼 반복 -> n 까지 자르기
}

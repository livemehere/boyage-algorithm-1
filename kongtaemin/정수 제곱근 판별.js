function solution(n) {
  let answer = 0;
  let origin = Math.sqrt(n);
  if (Number.isInteger(origin)) {
    return Math.pow(origin + 1, 2);
  }
  return -1;
}

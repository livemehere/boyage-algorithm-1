function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (isEven(i)) {
      answer -= i;
    } else {
      answer += i;
    }
  }

  return answer;
}

function isEven(n) {
  if (Number.isInteger(Math.sqrt(n))) return true; // 제곱근이 정수면 = 홀수 갯수
  return false; // 제곱근이 정수가 아니면 = 짝수 갯수
}

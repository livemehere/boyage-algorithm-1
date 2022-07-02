function solution(n) {
  let a = '수';
  let b = '박';
  let answer = '';

  for (let i = 0; i < n; i++) {
    if ((i + 1) % 2 != 0) {
      answer += a;
    } else {
      answer += b;
    }
  }

  return answer;
}

// 홀수면 '수'를 더하고 짝수면 '박'을 더한다.

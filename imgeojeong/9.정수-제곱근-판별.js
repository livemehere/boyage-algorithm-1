function solution(n) {
  var answer = 0;
  const sqrt = Math.sqrt(n);
  if (sqrt % 1 == 0) {
    // %연산자로 정수인지 실수인지 판단할 수 있다.
    answer = (sqrt + 1) ** 2;
  } else {
    answer = -1;
  }

  return answer;
}

// Math.sqrt를 한 값을 % 1 해서 나머지가 0이 되면 정수이고 안되면 실수인지 판단한다.
// parseInt를 통해서도 판단할 수 있다.

function solution(left, right) {
  let answer = 0;
  let count = 0;
  const counts = [];
  const numbers = [];
  for (let i = left; i <= right; i++) {
    numbers.push(i);
  } // left에서 right 까지의 숫자 배열을 만든다.

  for (let i = 0; i < numbers.length; i++) {
    count = 0;
    for (let j = 1; j <= numbers[i]; j++) {
      if (numbers[i] % j == 0) {
        count++;
      }
    }
    count % 2 == 0 ? (answer += numbers[i]) : (answer -= numbers[i]);
  }

  return answer;
}

function solution(num) {
  if (num === 1) return 0;

  let answer = 0;
  let temp = num;

  while (temp !== 1) {
    if (answer === 501) return -1;
    answer++;

    if (temp % 2 === 0) {
      temp /= 2;
    } else {
      temp = temp * 3 + 1;
    }
  }

  return answer;
}

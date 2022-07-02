function solution(numbers) {
  let answer = [];
  let n = numbers.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  answer = Array.from(new Set(answer));
  return answer.sort((a, b) => a - b);
}

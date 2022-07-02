function solution(numbers) {
  var answer = [];
  const array = [];
  let i = 0;
  let j = 1;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  const set = new Set(answer);
  answer = Array.from(set).sort((a, b) => a - b);

  return answer;
}

function solution(arr, divisor) {
  const answer = [];

  for (let i of arr) {
    if (i % divisor == 0) {
      answer.push(i);
    }
  }

  if (answer.length === 0) {
    answer.push(-1);
  }
  answer.sort((a, b) => a - b);
  return answer;
}

// 나누어지면 answer 배열에 더 하고 오름차순으로 정렬해야하기때문에 sort를 해준다.

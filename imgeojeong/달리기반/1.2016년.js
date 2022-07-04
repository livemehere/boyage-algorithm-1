function solution(a, b) {
  const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const days = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

  let sum = 0;

  for (let i = 0; i < a - 1; i++) {
    sum += months[i];
  }
  sum += b - 1;
  answer = days[sum % 7];

  return answer;
}

// months는 각 달의 일수를 나타낸다. a가 달이기때문에 a 그전의 달의 일수까지만 더하고 b 날을 더할때는 1월1일을 빼야하므로 -1해서 7로 나눈만큼의 인덱스의 요소가 요일이 된다.

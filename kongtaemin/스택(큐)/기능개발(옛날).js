function solution(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((p, idx) => Math.ceil((100 - p) / speeds[idx]));
  let passedDay = days[0];
  console.log(days);
  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= passedDay) {
      answer[j] += 1;
    } else {
      passedDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

function solution(n, lost, reserve) {
  let answer = 0;
  let two;
  let none;
  lost.sort((a, b) => a - b);
  reserve.sort((a, b) => a - b);
  const students = new Array(n).fill(1);

  for (let i = 0; i < reserve.length; i++) {
    students[reserve[i] - 1] = 2;
  }

  for (let i = 0; i < lost.length; i++) {
    if (students[lost[i] - 1] == 2) {
      students[lost[i] - 1] = 1;
    } else {
      students[lost[i] - 1] = 0;
    }
  }

  for (let i = 0; i < students.length; i++) {
    if (students[i] == 0) {
      if (students[i - 1] == 2) {
        students[i - 1] = 1;
        students[i] = 1;
      } else if (students[i + 1] == 2) {
        students[i + 1] = 1;
        students[i] = 1;
      }
    }
  }

  answer += students.filter((e) => e >= 1).length;
  return answer;
}
console.log('test', solution(3, [3], [1]));

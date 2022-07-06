function solution(progresses, speeds) {
  let answer = [];
  progresses = progresses.map((p, idx) => getRemainDays(p, speeds[idx]));

  let current = progresses.shift();
  let cnt = 1;

  while (progresses.length > 0) {
    const next = progresses.shift();
    if (current >= next) {
      cnt++;
    } else {
      answer.push(cnt);
      cnt = 1;
      current = next;
    }
  }

  answer.push(cnt);

  function getRemainDays(progress, speed) {
    let remain = 100 - progress;
    return Math.ceil(remain / speed);
  }

  return answer;
}

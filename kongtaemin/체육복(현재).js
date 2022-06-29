function solution(n, lost, reserve) {
  let answer = 0;
  let cnts = new Array(n).fill(1);
  lost.forEach((l) => {
    cnts[l - 1] -= 1;
  });
  reserve.forEach((r) => {
    cnts[r - 1] += 1;
  });
  console.log(cnts);

  for (let i = 0; i < n; i++) {
    if (cnts[i] === 0) {
      const left = cnts[i - 1];
      const right = cnts[i + 1];
      if (left > 1) {
        cnts[i - 1] -= 1;
        cnts[i] += 1;
        answer++;
      } else if (right > 1) {
        cnts[i + 1] -= 1;
        cnts[i] += 1;
        answer++;
      }
    } else {
      answer++;
    }
  }
  return answer;
}

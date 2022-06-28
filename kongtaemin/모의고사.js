function solution(answers) {
  // 오타때문에 한참 해맸네요 ....
  const p1 = [1, 2, 3, 4, 5];
  const p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let idx1 = (idx2 = idx3 = 0);
  let score1 = (score2 = score3 = 0);

  for (let x of answers) {
    if (x === p1[idx1++]) score1++;
    if (x === p2[idx2++]) score2++;
    if (x === p3[idx3++]) score3++;

    if (idx1 === p1.length) idx1 = 0;
    if (idx2 === p2.length) idx2 = 0;
    if (idx3 === p3.length) idx3 = 0;
  }
  let answer = [];
  let max = Math.max(score1, score2, score3);
  if (score1 === max) answer.push(1);
  if (score2 === max) answer.push(2);
  if (score3 === max) answer.push(3);

  return answer;
}

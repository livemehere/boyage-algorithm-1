function solution(lottos, win_nums) {
  const rank = [6, 6, 5, 4, 3, 2, 1]; // 0개, 1개 낙첨

  let match = 0;
  let zero = 0;

  for (let x of lottos) {
    if (win_nums.includes(x)) {
      match++;
    } else if (x === 0) {
      zero++;
    }
  }

  let worst = rank[match];
  let best = rank[match + zero] || 1; // 인덱스가 초과하면 1등

  return [best, worst];
}

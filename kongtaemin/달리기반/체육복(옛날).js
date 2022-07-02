function solution(n, lost, reserve) {
  let table = new Array(n).fill(1); // 모두 체육복을 가지고 있도록 세팅

  lost.forEach((l) => {
    table[l - 1] -= 1;
  });

  reserve.forEach((r) => {
    table[r - 1] += 1;
  });

  for (let t = 0; t < table.length; t++) {
    if (table[t] == 0) {
      if (table[t - 1] >= 2) {
        table[t] += 1;
        table[t - 1] -= 1;
      } else if (table[t + 1] >= 2) {
        table[t] += 1;
        table[t + 1] -= 1;
      }
    }
  }
  return table.reduce((acc, cur) => {
    console.log(acc, cur);
    if (cur >= 1) {
      return acc + 1;
    } else {
      return acc + 0;
    }
  }, 0);
}

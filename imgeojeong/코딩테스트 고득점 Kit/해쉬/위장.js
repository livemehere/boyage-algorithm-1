function solution(clothes) {
  var answer = 1;
  let sH = new Map();
  for (let i = 0; i < clothes.length; i++) {
    if (sH.has(clothes[i][1])) {
      sH.set(clothes[i][1], sH.get(clothes[i][1]) + 1);
    } else {
      sH.set(clothes[i][1], 1);
    }
  }

  for (let key of sH) {
    answer *= key[1] + 1;
  }

  return answer - 1;
}

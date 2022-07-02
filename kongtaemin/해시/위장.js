function solution(clothes) {
  let answer = 1;
  let map = new Map();

  clothes.forEach((c) => {
    let value = map.get(c[1]) + 1 || 2; // 2 를 더해주는 이유는 해당 종류의 옷을 아얘 입지 않을 경우이다.
    map.set(c[1], value);
  });

  for (let [k, v] of map) {
    answer *= v; // 각갯수를 곱해서 경우의 수를 구한다.
  }

  return answer - 1; // 모든 옷을 입지 않는 경우의수 1개를 빼준다.
}

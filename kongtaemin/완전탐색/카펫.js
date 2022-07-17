function solution(brown, yellow) {
  let answer = [];
  let r = [];
  // 가로길이 - 2 = 노랑 가로
  // 세로길이 - 2 = 노랑 세로

  // -> 가로 = 노랑가로 + 2
  // -> 세로 = 노랑세로 + 2

  // Q. 노랑의 가로,세로 ?

  // 1. 노랑의 갯수로 생성되는 짝을 배열로 만든다.
  for (let i = 1; i <= yellow; i++) {
    if (yellow % i === 0 && yellow / i >= i) {
      // 2. 각각에 +2 를 한다.
      r.push([yellow / i + 2, i + 2]);
    }
  }
  let total = brown + yellow;

  // 3. 각 두 곱이 = brown + yello 라면 답이다.
  for (let x of r) {
    if (x[0] * x[1] === total) {
      return x;
    }
  }

  return answer;
}

console.log(solution(10, 2));

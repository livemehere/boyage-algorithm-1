function solution(n) {
  var answer = 0;
  let num = [];

  while (n !== 0) {
    num.unshift(n % 3);
    n = parseInt(n / 3);
  }
  num.reverse();
  for (let i = 0; i < num.length; i++) {
    answer += num[i] * 3 ** (num.length - 1 - i);
  }

  return answer;
}

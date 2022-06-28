function solution(lottos, win_nums) {
  var answer = [];
  let count = 0;
  let zero = 0;
  let len = win_nums.length;

  count = lottos.filter((num) => win_nums.includes(num)).length;
  zero = lottos.filter((zero) => zero == 0).length;

  answer[1] = len - count + 1 > len ? len : len - count + 1;
  count += zero;
  answer[0] = len - count + 1 > len ? len : len - count + 1;

  return answer;
}

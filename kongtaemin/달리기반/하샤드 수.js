function solution(x) {
  let answer = true;

  let divide = x
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
  if (x % divide !== 0) answer = false;

  return answer;
}

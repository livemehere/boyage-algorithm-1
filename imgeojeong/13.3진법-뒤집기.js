function solution(x) {
  var answer = true;
  let num = 0;
  const array = x.toString().split('');
  for (let i of array) {
    num += parseInt(i);
  }
  x % num == 0 ? (answer = true) : (answer = false);

  return answer;
}

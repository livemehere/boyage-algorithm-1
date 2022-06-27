function solution(s) {
  var answer = '';

  const array = s.split('');
  array.sort().reverse();
  answer = array.join('');

  return answer;
}

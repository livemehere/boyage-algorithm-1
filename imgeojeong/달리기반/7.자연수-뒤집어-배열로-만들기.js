function solution(n) {
  var answer = [];
  const string = String(n);
  for (let i = string.length - 1; i >= 0; i--) {
    answer.push(parseInt(string[i]));
  }

  return answer;
}
// 자연수를 문자열로 바꾸어서 문자열의 뒤에서부터 다시 숫자로 바꾸면서 배열에 push한다.

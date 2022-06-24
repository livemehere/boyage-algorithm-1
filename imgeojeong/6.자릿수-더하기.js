function solution(n) {
  let answer = 0;

  const string = String(n);
  for (let i of string) {
    answer += parseInt(i);
  }

  return answer;
}
// 문자로 바꾼후 각 숫자를 얻어 더할때는 숫자로 바꿔서 더한다.

function solution(s) {
  let answer = '';
  let num = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == ' ') {
      // 공백이 있으면 num을 다시 0으로 만들어서 0부터 홀짝을 판별한다.
      num = 0;
      answer += ' ';
      continue;
    }

    if (num % 2 == 0 || num == 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }
    num++;
  }

  return answer;
}

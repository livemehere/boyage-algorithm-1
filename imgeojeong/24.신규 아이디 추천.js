function solution(new_id) {
  var answer = new_id;
  answer = answer
    .toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    .replace(/\.+/g, '.')
    .replace(/^\.|\.$/g, '');
  answer === '' ? (answer += 'a') : answer;

  answer = answer.length >= 16 ? answer.slice(0, 15) : answer;
  answer =
    answer[answer.length - 1] == '.'
      ? answer.slice(0, answer.length - 1)
      : answer;
  while (answer.length <= 2) {
    answer += answer[answer.length - 1];
  }

  return answer;
}

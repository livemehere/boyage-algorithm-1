function solution(n) {
  var answer = 0;

  const string = String(n);

  const array = string.split('');
  array.sort().reverse();
  answer = parseInt(array.join(''));

  return answer;
}

// 문자열로 바꾼후 스플릿을 해서 각각하나의 원소 배열로 나눈 다음 정렬을 하고 뒤집으면 내림차순으로 정렬이 된다. 배열을 다시 join으로 하나의 문자열로 합친 다음 숫자로 다시 바꾼다.

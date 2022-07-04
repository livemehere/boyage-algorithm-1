function solution(arr) {
  var answer = [];
  if (arr.length == 1) {
    answer.push(-1);
  } else {
    const array = arr.filter((x) => x !== Math.min(...arr)); // 최소값이랑 값이 다른 숫자만 배열에 다시 집어넣는다.
    answer = [...array]; // 그 배열을 스프레드 연산자로 복사한다.
  }

  return answer;
}

// 연습문제: 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
  // 원본 배열(arr)에 영향을 미치지 않고 내림차 정렬, 마지막 요소를 min에 저장
  let min = [...arr].sort((a, b) => b - a).pop();
  // 원본 배열에서 min을 제외하도록 필터링
  let answer = arr.filter((x) => x != min);
  // 길이가 0이면 [-1] 리턴
  return answer.length != 0 ? answer : [-1];
}

// 스터디 이후 불필요한 연산을 제거하기로 했음.
function solution_better(arr) {
  // WIP
  // return arr.splice(arr.indexOf(Math.min(...arr)), 1)
}

// 익주님 풀이에서 최소값이 여러개여도 가능하게 수정.
function solution2(arr) {
  var answer = [];

  let min = Math.min(...arr);
  let idx = arr.indexOf(min);

  while (idx != -1) {
    arr.splice(idx, 1);
    idx = arr.indexOf(min);
  }
  if (!arr.length) arr.push(-1);

  answer = Array.from(arr);
  return answer;
}

// 거정님 풀이
function solution3(arr) {
  var answer = [];
  if (arr.length == 0) {
    return answer.push(-1);
  } else {
    const array = arr.filter((x) => x !== Math.min(...arr)); // 최소값이랑 값이 다른 숫자만 배열에 다시 집어넣음
    answer = [...array];
  }

  return answer;
}

console.log(solution([1, 1, 2, 4, 5, 6, 7, 8, 1, 4, 2, 5, 123, 54]));
console.time("딜레이용");
console.timeEnd("딜레이용");

console.time("내 풀이: ");
solution([1, 1, 2, 4, 5, 6, 7, 8, 1, 4, 2, 5, 123, 54]);
console.timeEnd("내 풀이: ");
console.time("익주님 풀이: ");
solution2([1, 1, 2, 4, 5, 6, 7, 8, 1, 4, 2, 5, 123, 54]);
console.timeEnd("익주님 풀이: ");
console.time("거정님 풀이: ");
solution3([1, 1, 2, 4, 5, 6, 7, 8, 1, 4, 2, 5, 123, 54]);
console.timeEnd("거정님 풀이: ");
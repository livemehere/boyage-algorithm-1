// 연습문제: 프린터
// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  var answer = 0;

  class Queue {
    constructor() {
      this._arr = [];
    }
    enqueue(item) {
      this._arr.push(item);
    }
    dequeue() {
      return this._arr.shift();
    }
  }

  const queue = new Queue();

  // 큐에 일단 세팅한다.
  priorities.forEach((x, idx) => {
    queue.enqueue([idx, x]);
  });

  while (true) {
    // 일단 처음꺼 뽑기
    const doc = queue.dequeue();
    // max 구하기
    const arr = [...queue._arr].map((x) => x[1]);
    const maxarr = Math.max(...arr);

    // 뒤에 우선순위가 더 높은 게 하나라도 있으면 맨 뒤에 인큐
    if (doc[1] < maxarr) {
      queue.enqueue(doc);
    } else {
      // 현재 뽑은 것이 찾는 문서라면 리턴
      if (doc[0] === location) {
        return answer + 1;
      }
      // 아니라면 프린트된 문서 수 + 1
      else {
        answer++;
      }
    }
  }

  return queue._arr;
}

function solution2(priorities, location) {
  var answer = 0;
  let max = Math.max(...priorities);
  let lenghk = priorities.length;
  let count = 1;
  // 1. 일단 최댓 값을 구함 prior에서
  // 2. [0]이 최댓값일때 까지 push shift()를 반복함
  // 3. [0]이 최댓값이면 shift()만 해서 삭제하고 count를 1 더함
  // 4. 그리고 최댓값을 다시 구함
  // 위 과정을 반복하되 count을 3번과정을 거칠대 +1해야함
  // location을 2번과정을 거칠때 -1해서 위치를 알고있어야함

  while (1) {
    if (priorities[0] !== max) {
      priorities.push(priorities[0]);
      priorities.shift();
      location -= 1;
      if (location < 0) location = lenghk - 1;
    } else if (priorities[0] === max) {
      if (location === 0) {
        answer = count;
        break;
      } else {
        priorities.shift();
        count++;
        max = Math.max(...priorities);
      }
    }
  }

  return answer;
}
// 5
console.log(solution2([1, 1, 9, 1, 1, 1], 0));

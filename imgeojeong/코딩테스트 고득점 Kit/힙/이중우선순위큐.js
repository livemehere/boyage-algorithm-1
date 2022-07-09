function solution(operations) {
  var answer = [0, 0];
  let queue = []; // queue를 만든다.

  while (operations.length > 0) {
    let string = operations.shift().split(' ');
    if (string[0] == 'I') {
      queue.push(parseInt(string[1])); // 문자이기 때문에 숫자로 넣는다.
    } else {
      if (queue.length == 0) {
        // queue에 아무것도 없으면 그냥 넘긴다.
        continue;
      }
      if (string[1] == '-1') {
        // D일때 -1이면 최솟값 삭제
        queue.sort((a, b) => a - b); // 최솟값이 첫번째 원소
        queue.shift(); // 최솟값 빼내기
      } else {
        // D일때 1이면 최댓값 삭제
        queue.sort((a, b) => b - a); // 최댓값이 첫번째 원소
        queue.shift();
      }
    }
  }

  answer[0] = isFinite(Math.max(...queue)) ? Math.max(...queue) : answer[0];
  answer[1] = isFinite(Math.min(...queue)) ? Math.min(...queue) : answer[1];

  return answer;
}

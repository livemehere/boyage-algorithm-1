// 연습문제: 나누어 떨어지는 숫자 배열
// https://programmers.co.kr/learn/courses/30/lessons/12910?language=javascript

function solution(arr, divisor) {
    // 배열을 정렬하고 mod값이 0이 아닌 것을 반환. 배열 길이가 0이면 -1 반환.
    arr.sort(function(a, b) {
      return a - b;
    })
    let answer = arr.filter(x => x % divisor == 0);
    return answer.length == 0 ? [-1] : answer
}

// [5, 9, 7, 10]에서 5로 나누어 떨어지는 배열
console.log(solution([5, 9, 7, 10], 5));
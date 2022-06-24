// 연습문제: 수박수박수박수박수박수?
// https://programmers.co.kr/learn/courses/30/lessons/12922?language=javascript

function solution(n) {
    // 짝수면 "수박"만 n/2만큼 반복, 홀수면 "수박"반복 후 "수" 추가
    return (n%2 == 1 ? "수박".repeat(parseInt(n/2)) + "수" : "수박".repeat(parseInt(n/2)));
}

// 수박수박수 (5)
console.log(solution(5));
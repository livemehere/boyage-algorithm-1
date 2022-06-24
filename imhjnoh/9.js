// 연습문제: 정수 제곱근 판별
// https://programmers.co.kr/learn/courses/30/lessons/12934?language=javascript

function solution(n) {
    // 제곱근이 정수면 1 더해서 제곱
    return Number.isInteger(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}

console.log(solution(256));
// 연습문제: 정수 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12933?language=javascript

function solution(n) {
    // 문자열로 바꾼 후 1자씩 자르고 정렬하고 뒤집고 합친 후 1을 곱해서 int로 형변환
    return String(n).split("").sort((a, b) => a - b).reverse().join("")*1;
}

console.log(solution(31415926535));
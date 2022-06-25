// 연습문제: 자연수 뒤집어 배열로 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

function solution(n) {
    // n을 문자열로 만들고 1자씩 쪼갠 다음 뒤집고 int로 매핑
    return String(n).split("").reverse().map(x => parseInt(x));
}

console.log(solution(31415926535));
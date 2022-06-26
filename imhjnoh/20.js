// 연습문제: 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

// 쪼개고 정렬하고 뒤집고 조인
function solution(s) {
    return s.split("").sort().reverse().join("");
}

console.log(solution("Zbcdefg"));
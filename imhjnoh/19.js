// 연습문제: 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915

function solution(strings, n) {
    return strings.sort((a, b) => {
        if (a[n] != b[n]) return a[n] > b[n] ? 1 : -1
        else return a > b ? 1 : -1
    });
}

console.log(solution(["abce", "abcd", "cdx"]));
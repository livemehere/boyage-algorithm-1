// 연습문제: 하샤드 수
// https://programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
    // 쪼개고 더해서 문제대로 해결하였음.
    return (x % String(x).split("").reduce((sum, x) => sum + parseInt(x), 0) == 0) ? true : false;
}

console.log(solution(11));
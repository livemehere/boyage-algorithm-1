// 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    // 3진법 String으로 바꾸고 쪼개고 뒤집고 합치고 3진법 변환
    return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

// 125 -> 11122 -> 22111 -> 229
console.log(solution(125));
// 연습문제: 자릿수 더하기
// https://programmers.co.kr/learn/courses/30/lessons/12931?language=javascript

function solution(n){
    // 문자열로 만든 다음 1자씩 쪼개고 모두 더함.
    return n_str = String(n).split("").reduce((partialSum, a) => partialSum + parseInt(a), 0);
}

// 3+1+4+1+5+9+2+6+5+3+5
console.log(solution(31415926535));
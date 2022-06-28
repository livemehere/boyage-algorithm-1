// 연습문제: 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    let answer = 0
    for (let i = left; i < right + 1; i++){
        let counter = 0
        for (let j = 1; j < i + 1; j++){
            if (i % j == 0) counter++
        }
        if (counter % 2 == 0) answer += i
        else answer -= i
    }
    return answer;
}

console.log(solution(24,27));
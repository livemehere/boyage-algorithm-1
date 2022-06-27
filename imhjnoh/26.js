// 연습문제: 약수의 합
// https://programmers.co.kr/learn/courses/30/lessons/12928

function solution(n) {
    var answer = 0;
    for (let i = 1; i < n + 1; i++){
        if (n % i == 0) answer += i
    }
    return answer;
}

// 프로그래머스 해답 중 맘에 드는 것
// 약수의 짝을 바로바로 더해준다.
function solution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}

console.log(solution(12));
// 약수의 개수와 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
    var answer = 0;
    for(let i = left; i <= right; i++) {
//         제곱근이 정수라면 (2 * 2, 3 * 3 등으로 값을 구할 수 있다면)
        // 약수가 홀수 개
        if(Number.isInteger(Math.sqrt(i))) answer -= i;
        else answer += i
    }
    return answer;
}
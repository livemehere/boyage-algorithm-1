// 나머지가 1이 되는 수 찾기
// https://programmers.co.kr/learn/courses/30/lessons/87389

function solution(n) {
    var answer = 0;
    for(let i = 2; i < n; i++) {
        if(n % i === 1) {
            answer = i;
            break;
        }
    }
    
    return answer;
}
// 하샤드수 판별
// https://programmers.co.kr/learn/courses/30/lessons/12947

function solution(x) {
    var answer = true;
    let temp = x; // x를 temp로 복사
    let num = 0;

    while(temp > 0) {
        // 자릿수를 다 더하는 과정
        num += temp % 10;
        // 더했으면 10을 나누어줌. 소수점 방지
        temp = parseInt(temp / 10);
    }
    
    if(x % num !== 0) answer = false;
    
    
    return answer;
}
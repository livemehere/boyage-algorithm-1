// 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
    var answer = 0;


    // num이 1이 아닐때까지 반복
    while(num !== 1) {
        // 짝수면 2로 나누고
        if(num % 2 === 0) num = num / 2;
        // 홀수면 3곱하고 1더하기
        else num = num * 3 + 1;
        // 그리고 count역할인 answer를 증가함
        answer++;
        // 증가하다가 500번째가 되었다면 그 즉시 -1을 리턴
        if(answer === 500) return -1
    }
    return answer;
}
// 3진법 뒤집기
// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    var answer = 0;
    let temp_num = n
    let three = "";
    let count = 0;
    
    // 3진법으로 변환하기 위해
    // 3으로 계속 나누고 나머지를 string변환하여 붙임
    while(temp_num !==0) {
        three += (temp_num % 3).toString();
        temp_num = parseInt(temp_num / 3);
    }
    // 만들어진 3진법 수를 계산
    for(let i = three.length - 1; i >= 0; i--) {
        answer += parseInt(three[i]) * (3**count)
        count++;
    }
    return answer;
}
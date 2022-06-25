function solution(n) {
    var answer = 0;
    let temp = 0;
    if(Number.isInteger(Math.sqrt(n))) {
        temp = Math.sqrt(n) + 1;
        answer = temp * temp;
    }
    else answer = -1;
    return answer;
}
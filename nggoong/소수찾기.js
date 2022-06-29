// 소수찾기
// https://programmers.co.kr/learn/courses/30/lessons/12921

function isPrime(num) {
    if(num === 2) return true;
    else if(num === 4) return false;
    
    for(let i = 2; i < num / 2; i++) {
        if(num % i === 0) return false;
    }
    
    return true;
}

function solution(n) {
    var answer = 0;
    for(let i = 2; i <= n; i++) {
        if(isPrime(i)) answer++;
    }
    

    return answer;
}
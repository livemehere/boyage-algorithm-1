// 연습문제: 최대공약수와 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12940
// NOTE: 아!!!! 유클리드!!!!!

function solution(n, m) {
    var answer = [0,0];

    for (let i = 1; i < Math.max(n,m); i++){
        if (n % i == 0 && m % i == 0) answer[0] = Math.max(answer[0], i)
    }
    answer[1] = n*m/answer[0]

    return answer;
}

// 프로그래머스 레전드 풀이
function gcdlcm(a, b) {
    var r;
    // 일단 a*b 를 곱한 값을 선언한다. (최소공배수 구할 때만 사용)
    // r 이 0이 될 때까지 도는데.. 이 때 a를 b로 나눈 나머지값을 r에 할당하기까지 하는 만행을 저지른다
    // for 문이 끝날 때 a = b, b = 나머지값을 할당한다.
    for(var ab= a*b; r = a % b; a = b, b = r){}
    return [b, ab/b];
}


console.log(solution(49,14))
console.log(gcdlcm(14,49))

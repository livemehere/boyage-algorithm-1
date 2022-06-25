// 연습문제: 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943?language=javascript

function solution(num) {
    for(let i = 0; i < 500; i++){
        // 1이면 i리턴
        if(num === 1) return i
        // 아니면 문제대로 실행
        else num%2 != 0 ? num=num*3+1 : num=num/2
    }
    // 500번 찾았는데도 리턴이 없으면 -1 리턴
    return -1;
}

console.log(solution(37));
console.log(solution(7));
// -1
console.log(solution(626331));

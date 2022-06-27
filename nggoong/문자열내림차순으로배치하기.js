// 문자열 내림차순으로 배치하기
// https://programmers.co.kr/learn/courses/30/lessons/12917

function solution(s) {
    var answer = '';
    s = s.split('').sort((a, b) => {
        if(a < b) return 1;
        else if(a > b) return -1;
    });
    console.log(s)
    answer = s.join('');
    return answer;
}
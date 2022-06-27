// 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    var answer = '';
    answer = new_id.toLowerCase()
    .replace(/[^\w-_.]/g, '')
    .replace(/\.{2,}/g, '.')
    .replace(/^\.|\.$/g, '');
    if(answer.length === 0) answer+='a';
    answer = answer.slice(0, 15).replace(/\.$/g, '');
    
    const length = answer.length;
    if(length <= 2) {
        answer += answer[length-1].repeat(3-length);
    }
    return answer;
}
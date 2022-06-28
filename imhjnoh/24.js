// 연습문제: 신규 아이디 추천
// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
    let right_id = new_id
    
    // 1단계
    right_id = right_id.toLowerCase().split("")
    // 2단계
    right_id = right_id.filter(x => /[\w\-_\.]/.test(x))
    // 3단계
    right_id = right_id.join("").replace(/(\.)+/g, ".").split("")
    // 4단계
    if (right_id[0] == ".") right_id.splice(0,1)
    if (right_id[right_id.length - 1] == ".") right_id.splice(right_id.length - 1, 1)
    // 5단계
    if (right_id.length == 0) right_id = ["a"]
    // 6단계
    right_id = right_id.slice(0,15)
    if (right_id[right_id.length - 1] == ".") right_id.splice(right_id.length - 1, 1)
    // 7단계
    if (right_id.length == 1) right_id.push(right_id[0], right_id[0])
    if (right_id.length == 2) right_id.push(right_id[1])
    
    return right_id.join("");
}

// 프로그래머스 1번 풀이
function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5
        .slice(0, 15).replace(/\.$/, ''); // 6
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len);
}

console.log(solution("...!@BaT#*..y.abcdefghijklm"));
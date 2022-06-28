// 시저암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    var answer = '';
    
    for(let i of s) {
//         아스키코드를 구해서 n만큼 이동
        let new_code = parseInt(i.charCodeAt(0)) + n;
        if(i === " ") answer+=" ";
        else {
//             대문자인 경우
            if(parseInt(i.charCodeAt(0)) < 97) {
                if(new_code <= 90) answer += String.fromCharCode(new_code);
//                 n만큼 이동한 결과 Z를 넘어가면 A부터 시작하도록  91을 나눠줌 (Z : 90)
                else if(new_code > 90) answer += String.fromCharCode(65 + (new_code % 91));
            }
//             소문자인 경우
            else if(parseInt(i.charCodeAt(0)) >= 97) {
                if(new_code <= 122) answer += String.fromCharCode(new_code);
//                 n만큼 이동한 결과 z를 넘어가면 a부터 시작하도록 123을 나눠줌 (z : 123)
                else if(new_code > 122) answer += String.fromCharCode(97+(new_code % 123))
            }
            
        }
    }
    return answer;
}
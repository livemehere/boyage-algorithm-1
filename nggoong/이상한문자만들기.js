function solution(s) {
    var answer = '';
    let temp = [];

    // 받아온 문자열을 공백 문자 단위로 나누기
    let strs = s.split(' ');
    
    // 나눠진 문자열을 순회
    for(let str of strs) {
        let result="";
        for(let i = 0; i < str.length; i++) {
            // 짝수 index이면 대문자로 변경
            if(i % 2 === 0) result+= str[i].toUpperCase();
            // 홀수 index이면 소문자로 변경
            else result += str[i].toLowerCase();
        }
        // 중간에 공백문자를 다시 넣어주기 위해 배열에 push
        temp.push(result);
        // 공백문자 삽입
        answer = temp.join(' ');
        console.log(answer)
        
    }
    return answer;
}
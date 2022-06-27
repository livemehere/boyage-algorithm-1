// 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301


function solution(s) {
    var answer = [];
    let string = [];
    let alpha = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let strArr = s.split('');
    for(let i of strArr) {
        let temp;
        let tempIndex;
        if(isNaN(Number(i))) {
            string.push(i);
            temp = string.join('');
            tempIndex = alpha.indexOf(temp);
            if(tempIndex!==-1) {
                answer.push(tempIndex);
                string = [];
            }
        }
        else {
            answer.push(i);
        }
    }
    answer = parseInt(answer.join(''));
    return answer;
}




function solution(s) {
    let answer = 0;
    let temp = s;
    let arr =[/zero/gm,/one/gm,/two/gm,/three/gm,/four/gm,/five/gm,/six/gm,/seven/gm,/eight/gm,/nine/gm];
    
    for(let i = 0; i < arr.length; i++) {
        temp = temp.replace(arr[i], i);
    }
    answer = parseInt(temp);
    return answer;
}



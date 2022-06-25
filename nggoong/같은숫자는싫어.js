// 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    var answer = [];
    let copy_arr = Array.from(arr);
    let last = -1;
    
    for (let i of copy_arr) {
        if(last !== i){
            last = i;
            answer.push(i);
        }
    }
    return answer;
}
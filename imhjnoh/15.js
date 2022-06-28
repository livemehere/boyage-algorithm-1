// 연습문제: 같은 숫자는 싫어
// https://programmers.co.kr/learn/courses/30/lessons/12906

function solution(arr)
{
    let answer = [arr[0]]
    
    // 다르면 푸쉬.
    arr.forEach( (elem, idx) => {
        if (arr[idx - 1] != elem && idx != 0) answer.push(elem)
    })
    
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));
// 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935

function solution(arr) {
    var answer = [];
    
    // 제일 작은 수를 arr에서 추출함
    let min = Math.min(...arr);
    // 제일 작은 수의 인덱스를 구함
    let index = arr.indexOf(min);
    // 그 인덱스의 요소를 제거
    arr.splice(index, 1);
    
    // arr의 길이가 0이라면 -1을 push
    if(!arr.length) arr.push(-1);
    
    answer = Array.from(arr);
    return answer;
}
// 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845
function solution(nums) {
    var answer = 0;
    let temp = new Set(nums);
    if((nums.length / 2) >= temp.size) answer = temp.size;
    else answer = nums.length / 2;

    return answer;
}

let nums = [3,3,3,2,2,2];
console.log(solution(nums));
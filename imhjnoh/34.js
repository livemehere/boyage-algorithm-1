// 연습문제: 폰켓몬
// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    return Math.min([...new Set([...nums])].length, parseInt(nums.length / 2));
}

console.log(solution([3,3,3,2,2,4]));
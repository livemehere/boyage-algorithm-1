// 연습문제: 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644?language=javascript

// 주석이 필요없는.. 반복문 코드
function solution(numbers) {
    let answer = new Set()
    for (let i = 0; i < numbers.length;  i++){
        for (let j = i + 1; j < numbers.length; j++){
            answer.add(numbers[i]+numbers[j])
        }
    }
    return Array.from(answer).sort((a, b) => a - b);
}

console.log(solution([2,1,3,4,1]));
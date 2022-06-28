// 두 개 뽑아서 더하기
// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
    var answer = [];
    let result = [];
    let temp = Array.from(numbers);
    // 모든 경우의 수를 더해서 result에 push
    for(let i = 0; i < temp.length; i++) {
        for(let j = i + 1; j < temp.length; j++) {
            result.push(temp[i] + temp[j]);
        }
    }
    
    // 중복 요소 제거
    answer = [...new Set(result)];

    // 오름차순 정렬
    answer.sort((a, b) => {
        return a - b;
    })
    return answer;
}
// 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    var answer = 0;
    let temp = [...d];
    let sum = 0;
    
    // 물품 가격이 낮은 곳부터 넣어야 많이 넣기 때문에
    temp = temp.sort((a, b) => a - b);
    
    for(let i of temp) {
        // 일단 물품을 더함
        sum += i;
        // 더한 값이 예산을 넘어가면 탈출
        if(sum > budget) break;
        // 넘어가지 않으면 부서 개수 ++
        else answer++;
    }
    return answer;
}
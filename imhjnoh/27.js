// 연습문제: 예산
// https://programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
    var answer = 0;
    let remain = budget

    // 작은것부터 차례대로 뺐다. remain이 0보다 작게 될 경우 빠져나감.
    d.sort((a,b) => a-b)
    for(let i = 0; remain >= 0; i++){
        remain -= d[i]
        answer++
    }
    return answer-1;
}

console.log(solution([1,3,2,5,4], 9));
// 연습문제: 기능개발
// https://programmers.co.kr/learn/courses/30/lessons/42586?language=javascript#

function solution(progresses, speeds) {
    // 작업 개수
    let task_num = progresses.length
    // 작업별 소요기간 배열
    let takes_day = [...progresses].map((x, i) => x == 100 ? 0 : Math.ceil((100 - x)/speeds[i]))
    var answer = []
    
    // 한 번에 배포되는 작업의 수
    let count = 0
    // 한 번에 배포되는 작업 중 가장 긴 소요기간
    let flag = 0
    
    takes_day.forEach((x, i) => {
        
        // flag와 이번 작업까지 포함해서 가장 긴 것과 비교
        let max_day = Math.max(x, flag)
        
        if (max_day < takes_day[i + 1] || (i == task_num - 1)){
            answer.push(count + 1)
            count = 0
            flag = 0
        }
        else if (max_day >= takes_day[i + 1]){
            count++ 
            flag = max_day
        }
    })
    
    return answer
}

// [2, 4]
console.log([93, 30, 55, 60, 40, 65], [1, 30, 5, 10, 60, 7])
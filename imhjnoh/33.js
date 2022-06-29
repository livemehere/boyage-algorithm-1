// 연습문제: 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862# 

function solution(n, lost, reserve) {
    let real_reserve = [...reserve.filter(x => !lost.includes(x))]
    let real_lost = [...lost.sort((a,b) => a-b).filter(x => !reserve.includes(x))]
    lost = [...real_lost]
    
    lost.forEach((x, idx) => {
        // console.log("start", real_lost, real_reserve)
        if (real_reserve.includes(x - 1)){
            // console.log("x-1", x, real_reserve)
            real_reserve.splice(real_reserve.indexOf(x - 1), 1)
            real_lost.splice(real_lost.indexOf(x), 1)
        } else if (real_reserve.includes(x + 1)){
            // console.log("x+1", x, real_reserve)
            real_reserve.splice(real_reserve.indexOf(x + 1), 1)
            real_lost.splice(real_lost.indexOf(x), 1)
        }
        // console.log("end", real_lost, real_reserve)
    })
    
    
    return n - real_lost.length;
}

// 4
console.log(solution(5, [1,2], [2,3]))

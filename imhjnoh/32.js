// 연습문제: 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    var ratio = [];
    // 실패율 : 현재 스테이지 번호를 가진 플레이어 수 / (현재 스테이지 번호를 가진 플레이어 + 현재 스테이지보다 큰 번호를 가진 플레이어 수)
    for(let i = 1; i < N+1; i++){
        let stopped = stages.filter(user => user == i).length
        let visited = stages.filter(user => user >= i).length
        ratio.push([i,stopped/visited])
        // console.log(i,stopped, visited, ratio)
    }
    return ratio.sort((a,b) => a[1]>b[1] ? -1 : 1)
                .map(x => x[0]);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
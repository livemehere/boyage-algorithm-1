// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
    let answer = [];
    let ratio = [];
    let reached;
    let not_complete;
    
    
    for(let i = 1; i <= N; i++) {
        reached = stages.filter(element=> {
            if(element >= i) return true;
        })
        
        not_complete = stages.filter(element => {
            if(element === i) return true;
        })
        ratio.push([i,(not_complete.length / reached.length)]);
    }
    
    ratio = ratio.sort((a,b)=>{
        if(a[1] > b[1]) return -1;
        else if(a[1] < b[1]) return 1;
        else if(a[1] === b[1]) return a[0] < b[0]? -1 : 1;
    })
    
    for(let i of ratio) answer.push(i[0]);
    return answer;
}
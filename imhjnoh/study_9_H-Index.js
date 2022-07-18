// 연습문제: H-Index 
// https://school.programmers.co.kr/learn/courses/30/lessons/42747

function solution(citations) {
    var answer = 0;
    
    // let maxrefcnt = Math.max(...citations)
    // for(let h = 0; h < maxrefcnt; h++){
    //     const overh = [...citations].filter(x => x>=h)
    //     if(overh.length >= h) answer = h
    // }
    
    citations.sort((a,b) => b-a) // 일단 내림차정렬 
    console.log(citations)
    let h = 0 // 0부터 h 시작
    
    // h번이상 인용된 논문이 h편이상인지 확인한다.
    // h+1 은 현재 검사한 논문 수를 의미한다.
    // citations[h] 가 h+1 보다 크거나 같다는 것은 
    // h+1번째 논문의 인용 수가 h+1보다 크거나 같다는 의미이다.
    while(h+1 <= citations[h]){ 
        console.log("h :", h, "| h+1 :", h+1, "| citations[h] :", citations[h])
        h++
    }
    console.log("h :", h, "| h+1 :", h+1, "| citations[h] :", citations[h], "FINAL")
    
    return h;
}

console.log(solution([3, 0, 6, 1, 5]));
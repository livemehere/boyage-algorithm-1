// 체육복
// https://programmers.co.kr/learn/courses/30/lessons/42862


function solution(n, lost, reserve) {
    var answer = 0;
    // 일단 다 한 벌씩 가져왔다고 가정하고 1로 초기화
    // 6개인 이유는 인덱싱 편하게 하려고
    let result = Array.from({length:n+1}, ()=>1);
    
    // 도난당한 사람 -1
    for(let i of lost) {
        result[i]--;
    }
    
    // 여벌 가져온 사람 +1
    for(let i of reserve) {
        result[i]++;
    }
    
    // 0 index는 무시하고 1번부터 돈다.
    for(let i = 1; i <= result.length; i++) {
        if(i === result.length) break;
        if(result[i] === 0) {
            // 앞사람 여벌있음?
            if(result[i - 1] === 2) {
                result[i-1]--;
                result[i]++;
            }
            // 뒷사람 여벌있음?
            else if(result[i + 1] === 2) {
                result[i+1]--;
                result[i]++;
            }
        }
    }
    for(let i = 1; i <= result.length; i++) {
        if(result[i] >= 1) answer++;
    }
    
    return answer;
}


console.log(solution(5, [2, 4], [1, 3, 5]))
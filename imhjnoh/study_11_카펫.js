// 연습문제: 카펫
// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
    const area = brown + yellow
    // 카펫은 무조건 네모인듯.
    
    // 노란색이 한 줄인 경우
    // 노란색이 홀수일 경우에는 무조건 한 줄이기 때문에 else에는 짝수일 때만 들어간다.
    if(brown === (yellow*2 + 6)) return [yellow + 2, 3]
    else{
        // i는 세로 길이
        // 노란색이 한 줄이 아닌 경우 한 변의 길이는 area/2 이하이다.
        // 여기서 세로는 가로보다 무조건 짧기 때문에 area/4 이하일 것이다.
        for(let h = 2; h <= area/4; h++){
            const w = area / h
            console.log(w, h, h*2+w*2-4)
            if((area % h === 0) && (brown === h * 2 + w * 2 - 4)) {
                return [w, h]
            }
            else continue
        }
    }
    
    return -1;
}

// [8,6]
console.log(solution(24,24));
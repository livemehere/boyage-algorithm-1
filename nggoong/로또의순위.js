// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

// filter로 이용해서 풀어도 되긴함

function solution(lottos, win_nums) {
    var answer = [];
    let zero_count = 0;
    let strike = 0;
    let min;
    let max;
    
    for(let i of lottos) {
        if(i === 0) zero_count++;
        if(win_nums.includes(i)) strike++;
    }
    let score = zero_count + strike;
//     0이 다 strike 됐다고 가정
    if(score === 6) max = 1;
    else if(score === 5) max = 2;
    else if(score === 4) max = 3;
    else if(score === 3) max = 4;
    else if(score === 2) max = 5;
    else max = 6;
    
//     0이 다 안맞았다고 가정
    if(strike === 6) min = 1;
    else if(strike === 5) min = 2;
    else if(strike === 4) min = 3;
    else if(strike === 3) min = 4;
    else if(strike === 2) min = 5;
    else min = 6;
    
    
    answer.push(max);
    answer.push(min);

    return answer;
}
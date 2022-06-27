// 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
    var answer = [];
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let score = [0,0,0];
    let best;
    
    for(let i = 0; i < answers.length; i++) {
        // 수포자 1
        if(one[i % one.length] == answers[i]){
            score[0]++;
        } 
//         수포자 2
        if(two[i % two.length] === answers[i]){
            score[1]++;
        } 
//         수포자 3
        if(three[i % three.length] === answers[i]){
            score[2]++;   
        }
    }
    console.log(score)
    best = Math.max(...score);
    score.forEach((value, index) => {
        if(value === best) answer.push(index + 1);
    })
    
    return answer;
}
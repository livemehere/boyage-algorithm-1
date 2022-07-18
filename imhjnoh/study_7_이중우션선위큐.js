// 연습문제: 이중우선순위큐
// https://school.programmers.co.kr/learn/courses/30/lessons/42628

function solution(operations) {
    var answer = [];
    operations.forEach((x, i) => {
        if(x[0] == "I"){
            const num = x.slice(2,x.length)
            answer.push(num*1)
        }else{
            if(x.match(/(-1)/)){
                const idx = answer.indexOf(Math.min(...answer))
                answer.splice(idx, 1)
            }else if(x.match(/(1)/)){
                const idx = answer.indexOf(Math.max(...answer))
                answer.splice(idx, 1)
            }
        }
        console.log(answer)
    })
    const max = Math.max(...answer)
    const min = Math.min(...answer)
    return answer.length != 0 ? [max, min] : [0,0];
}

console.log(solution(["I -45", "I 653", "D 1", "I -642", "I 45", "I 97", "D 1", "D -1", "I 333"]))
function solution(n) {
    var answer = [];
    let result = [];
    result = n.toString().split('').reverse();
    
    for(let i of result) {
        answer.push(parseInt(i));
    }
    
    
    return answer;
}
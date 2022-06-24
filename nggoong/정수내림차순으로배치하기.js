function solution(n) {
    var answer = 0;
    n = n.toString().split('');
    n.sort((a, b)=> {
        return b - a;
    })
    
    answer = parseInt(n.join(''));
    return answer;
}
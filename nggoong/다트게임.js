function solution(dartResult) {
    var answer = 0;
    let digit = '';
    let score = 0;
    let pow = 0;
    let readyCalc = false;
    
    for(let i = 0; i < dartResult.length; i++) {
        if(/[0-9]/.test(dartResult[i])){
            if(readyCalc){
                score = parseInt(digit) ** pow;
                answer += score;
                digit='';
                readyCalc = !readyCalc;
            }
            digit+=dartResult[i];
        }
        else {
            if(/[S | D | T]/.test(dartResult[i])) {
                readyCalc = !readyCalc;
                if(dartResult[i] === "S") pow = 1;
                else if(dartResult[i] === "D") pow = 2;
                else if(dartResult[i] === "T") pow = 3;

                if (i === dartResult.length - 1) {
                    score = parseInt(digit) ** pow;
                    answer += score;
                }
            }
            else if(dartResult[i] === '*' || dartResult[i] === '#') {
                if(dartResult[i] === "*" && readyCalc) {
                    score = parseInt(digit) ** pow;
                    answer = answer * 2;
                    answer += score * 2;
                    digit = '';
                    readyCalc = !readyCalc;
                }
                else if(dartResult[i]==='#' && readyCalc) {
                    score = parseInt(digit) ** pow;
                    answer += score * (-1);
                    digit='';
                    readyCalc = !readyCalc;
                }
            }
        }
    }

    return answer;
}

console.log(solution('10D10S0D'));


// 마지막 연산이 수행되지 않아,,
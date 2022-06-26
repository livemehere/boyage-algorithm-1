// 연습문제: 숫자 문자열과 영단어
// https://programmers.co.kr/learn/courses/30/lessons/81301

function solution(s) {
    return s.replace(/zero/g, "0")
            .replace(/one/g, "1")
            .replace(/two/g, "2")
            .replace(/three/g, "3")
            .replace(/four/g, "4")
            .replace(/five/g, "5")
            .replace(/six/g, "6")
            .replace(/seven/g, "7")
            .replace(/eight/g, "8")
            .replace(/nine/g, "9")
            *1;
}

// 프로그래머스 1번 풀이 : split 활용이 기발함
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}

console.log(solution("one4seveneight"));
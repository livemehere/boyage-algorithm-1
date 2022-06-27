// 연습문제: 시저 암호
// https://programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
    return s.split("").map(x => {
        let x_ascii = x.charCodeAt(0)
        if (x == " ") return " "
        else if (/[a-z]/.test(x) && x_ascii + n > 122) return String.fromCharCode(97 + n - (122 - x_ascii) - 1)
        else if (/[A-Z]/.test(x) && x_ascii + n > 90 ) return String.fromCharCode(65 + n - (90 - x_ascii) - 1)
        else return String.fromCharCode(x.charCodeAt(0) + n)
    }).join("");
}

console.log(solution("a B z", 4));
// 연습문제: [1차] 다트 게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
    let case_map = {"S":1, "D":2, "T":3, "*":2, "#":(-1)}
    let prev_score = 0
    let answer = dartResult.match(/([0-9]|10)(S|D|T)(\*|#|)/g)
                           .reduce((acc, x) => {
                                let score = x.match(/([0-9]|10)/g).join("")*1
                                let bonus = x.match(/(S|D|T)/g).join("")
                                let option = x.match(/(\*|#|)/g).join("")
                                let score_res = (score ** case_map[bonus])*(option ? case_map[option] : 1)
                                let sum = acc
                                sum += - (option == "*" ? prev_score : 0)
                                       + (option == "*" ? prev_score*case_map[option] : 0)
                                       + score_res
                                prev_score = score_res
                                // console.log(sum, prev_score, score, bonus, option, score_res)
                                return sum
                            },0)
    return answer;
}

// 5
console.log(solution("1D#2S*3S"));
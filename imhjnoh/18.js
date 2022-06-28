// 연습문제: 모의고사
// https://programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

// 나의 풀이
function solution(answers) {
    let answer = []
    let seongjeokpyo = [0, 0, 0]
    answers.forEach((a, idx) => {
        // 1번은 5개씩 반복, 순서대로 찍으니까 mod값이 답
        seongjeokpyo[0] += idx % 5 + 1 == a ? 1 : 0
        // 2번은 8개씩 반복, 짝수인덱스는 2, 나머지는 1 / 345 와 같이 불연속적적인 구간이 1개 존재하므로 2경우로 나눠서 진행
        seongjeokpyo[1] += (((idx % 2 == 0) ? 2 : ((idx % 8 <= 1) ? 1 : (idx % 8 + 1)/2 + 1)) == a) ? 1 : 0
        // 3번은 10개씩 반복, 3 / 12 / 45 와 같이 불연속적인 구간이 2개 존재하므로 3경우로 나눠서 진행
        seongjeokpyo[2] += ((idx % 10 < 2) && 3 == a) ? 1 : 0 
        seongjeokpyo[2] += ((idx % 10 >= 2) && (idx % 10 < 6) && (parseInt((idx % 10) / 2)) == a) ? 1 : 0
        seongjeokpyo[2] += ((idx % 10 >= 6) && (parseInt((idx % 10) / 2)) + 1 == a) ? 1 : 0
    })
    
    let highscore = Math.max(...seongjeokpyo)
    seongjeokpyo.forEach((score, idx) => {
        if (score == highscore) answer.push(idx + 1)
    })
    return answer;
}

// 프로그래머스 레전드 1번풀이 
function first_solution(answers) {
    var answer = [];
    var a1 = [1, 2, 3, 4, 5];
    var a2 = [2, 1, 2, 3, 2, 4, 2, 5]
    var a3 = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

    var a1c = answers.filter((a,i)=> a === a1[i%a1.length]).length;
    var a2c = answers.filter((a,i)=> a === a2[i%a2.length]).length;
    var a3c = answers.filter((a,i)=> a === a3[i%a3.length]).length;
    var max = Math.max(a1c,a2c,a3c);

    if (a1c === max) {answer.push(1)};
    if (a2c === max) {answer.push(2)};
    if (a3c === max) {answer.push(3)};


    return answer;
}


console.time("딜레이용: ")
console.log(first_solution([1,2,3,4,5]));
console.timeEnd("딜레이용: ")


console.time("내 솔루션: ")
console.log(solution([1,2,3,4,5]));
console.timeEnd("내 솔루션: ")
console.time("프로그래머스 1번 솔루션: ")
console.log(first_solution([1,2,3,4,5]));
console.timeEnd("프로그래머스 1번 솔루션: ")
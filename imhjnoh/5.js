// 연습문제: 이상한 문자 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12930?language=javascript

function solution(s) {
    // 1. 전부 공백으로 쪼갠다 s.split(" ")
    // 2. 쪼갠 리스트의 단어 1개인 x를 1자씩 쪼갠다 .map(x => (x.split(""))
    //              ex) x == "apple"   =>   ["a", "p", "p", "l", "e"]
    // 3. 1자씩 쪼갠 리스트를 돌며 짝수번째일 경우 대문자로, 홀수번째일 경우 소문자로 변환 .map((y, idx) => idx%2===0 ? y.toUpperCase() : y.toLowerCase())
    // 4. 변환된 리스트를 다시 한 단어로 조립 .join("")
    //              ex) ["A", "p", "P", "l", "E"] => "ApPlE"
    // 5. 조립된 단어들을 다시 하나의 문자열로 조립 .join(" ")
    return tmp = s.split(" ").map(x => (x.split("").map((y, idx) => idx%2===0 ? y.toUpperCase() : y.toLowerCase())).join("")).join(" ");
}

console.log(solution("hElLo worLd hello        java sc     ript"));
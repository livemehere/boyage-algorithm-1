// 연습문제: 위장
// https://programmers.co.kr/learn/courses/30/lessons/42578?language=javascript

function solution(clothes) {
    let closet = new Set()
    // closet에 {종류:[옷]}으로 맵 생성
    clothes.map((x, idx) => closet[x[1]] ? closet[x[1]].push(x[0]) : closet[x[1]] = [x[0]])
    // 종류별 의상 수 + 1(안 입는 경우) 를 계속 곱해주고, 마지막에 전부 안 입는 경우 1을 빼 준다.
    return Object.keys(closet).reduce((acc, x) => acc * (closet[x].length + 1), 1) - 1;
}

// 5
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
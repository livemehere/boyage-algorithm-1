// 연습문제: 제일 작은 수 제거하기
// https://programmers.co.kr/learn/courses/30/lessons/12935?language=javascript

function solution(arr) {
    // 원본 배열(arr)에 영향을 미치지 않고 내림차 정렬, 마지막 요소를 min에 저장
    let min = [...arr].sort((a, b) => b - a).pop()
    // 원본 배열에서 min을 제외하도록 필터링
    let answer = arr.filter(x => x != min)
    // 길이가 0이면 [-1] 리턴
    return answer.length != 0 ? answer : [-1];
}

console.log(solution([1,1,2,4,5,6,7,8,1,4,2,5,123,54]));
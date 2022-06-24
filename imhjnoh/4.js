// 연습문제: 완주하지 못한 선수
// https://programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
    // completion과 participant를 정렬하고 함께 iteration하면서 둘이 다를 경우 해당 participant를 반환.
    // completion길이만큼 다 돌았을 경우 정렬된 participant의 마지막 요소 반환.
    completion.sort()
    participant.sort()
    for (let i = 0; i < completion.length; i++){
        if (participant[i] != completion[i]){
            return participant[i];
        }
    }
    return participant[completion.length];
}

// 통과 못 한 한 사람
console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"]));
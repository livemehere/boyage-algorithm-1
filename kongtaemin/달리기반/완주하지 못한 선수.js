function solution(participant, completion) {
  participant.sort(); // 사전순으로 정렬하기
  completion.sort(); // 사전순으로 정렬하기
  for (let i in participant) {
    if (participant[i] !== completion[i]) return participant[i]; // 참가자 중에서 완주자 배열에 존재하지 않는다면 완주하지 못한 것이고, 1명이라 했으니 바로 return
  }
}

function solution(arr, divisor) {
  let answer = [...arr].sort((a, b) => a - b); // 결과값이 오름차순이기 때문에, 받고서 오름차순 정리
  answer = answer.filter((a) => a % divisor === 0); // 배열을 순회하면서 0으로 나누어 떨어지는 것만 남기기
  if (answer.length === 0) return [-1]; // 남은게 하나도 없다면 -1 반환하고 끝내기
  return answer; // 정상적으로 필터링되었다면 그 결과를 반환
}

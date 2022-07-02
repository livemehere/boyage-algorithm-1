function solution(dartResult) {
  let answer = 0;
  let shots = dartResult.match(/[0-9]{1,}[S|D|T][*|#]?/g); //매 샷을 분리하기
  let n = shots.length;
  let beforeEvent; // * 옵션은 이전 샷에 영향을 주기 때문에, 스타가 나온다면 기억

  // * 옵션 때문에, 앞선 점수는 재평가 되야하기 때문에, 뒤에서 부터 계산
  for (let i = n - 1; i >= 0; i--) {
    let shot = shots[i];
    if (shot[1] === "0") shot = [shot[0] + shot[1], shot[2], shot[3]]; // 점수가 10점으로 두자리수라면, 배열 재정렬
    const mount = getMount(shot[1]);
    let point = Math.pow(Number(shot[0]), mount); // 점수 계산

    if (beforeEvent === "*") point *= 2; // 앞선 계산에서 옵션으로 * 이 있었다면 이번 샷도 2배

    // 이건 내 옵션
    if (shot[2] === "*") {
      point *= 2;
    } else if (shot[2] === "#") {
      point *= -1;
    }

    // 최종 계산된 점수를 더함
    answer += point;
    beforeEvent = shot[2]; // 나의 옵션을 다음 샷도 알수있도록 세팅
  }

  function getMount(s) {
    if (s === "S") return 1;
    if (s === "D") return 2;
    if (s === "T") return 3;
  }
  return answer;
}

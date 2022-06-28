function solution(strings, n) {
  let answer = [...strings];
  // sort를 할때 양수, 음수, 0 일경우를 판단하는 것이 핵심, 문자열끼리 비교한다음 return 값을 수동으로 해주어야한다. a-b 하듯이 하면 정확하지 않음
  answer.sort((a, b) => {
    if (a[n] > b[n]) {
      return 1;
    } else if (a[n] < b[n]) {
      return -1;
    } else {
      if (a > b) return 1;
      if (a < b) return -1;
    }
  });

  return answer;
}

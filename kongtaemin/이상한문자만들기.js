function solution(s) {
  let answer = "";
  let flag = true;
  for (let x of s) {
    if (x === " ") {
      flag = true;
      answer += x;
      continue;
    }

    if (flag) {
      answer += x.toUpperCase();
    } else {
      answer += x.toLowerCase();
    }
    flag = !flag;
  }

  return answer;
}

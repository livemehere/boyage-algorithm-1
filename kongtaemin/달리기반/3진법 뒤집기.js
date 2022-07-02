function solution(n) {
  let answer = 0;
  let three = n.toString(3); //toString(진법) 으로 "숫자->진법(string)"
  let reversed = Number(three.split("").reverse().join(""));
  answer = parseInt(reversed, 3); //parseInt(string,현재진법) => 10진수로 변환

  return answer;
}

function solution(numbers) {
  // number의 요소를 string화
  const numbersString = numbers.map((num) => String(num));
  // 정렬하기
  numbersString.sort((a, b) => {
    // b + a숫자와 a + b 숫자를 비교해서 내림차순으로 정렬
    console.log(a, b);
    console.log(b + a, a + b);
    return parseInt(b + a) - parseInt(a + b);
  });
  console.log(numbersString);
  // 만들어진 배열 문자열화
  const answer = numbersString.join('');
  return answer[0] === '0' ? '0' : answer; // 내림차순으로 배열을 정렬했기에 앞자리가 0인경우모든 인자가 0이라는 걸 알 수 있어서 삼항연산자를 이용하여 첫번째 인자가 0인 경우 0을 출력하고 아닌경우 answer를 출력하도록 바꿔준다.
}

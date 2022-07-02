function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
    } else {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// undefined와 배열의 마지막 원소를 비교해서 넣는다.

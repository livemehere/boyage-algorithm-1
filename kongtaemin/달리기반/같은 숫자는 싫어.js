function solution(arr) {
  let latest = arr[0];
  let answer = [latest];
  for (let x of arr) {
    if (latest !== x) {
      answer.push(x);
      latest = x;
    }
  }
  return answer;
}

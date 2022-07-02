function solution(checkin, checkout) {
  let answer = 0;
  for (let i = 0; i < checkout.length; i++) {
    if (checkout[i] >= 29) {
      checkout[i] = 21;
    }
    answer += checkout[i] - checkin[i];
  }

  return answer;
}

let arr1 = [9, 9, 9, 9, 7, 9, 8];
let arr2 = [23, 23, 30, 28, 30, 23, 23];
console.log(solution(arr1, arr2));

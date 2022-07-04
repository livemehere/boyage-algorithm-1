function solution(arr1, arr2, signs) {
  let answer = new Array(arr1.length);
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = new Array(arr1[0].length);
  }

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1[0].length; j++) {
      if (signs[i][j] == false) {
        answer[i][j] = (arr1[i][j] + arr2[i][j]) * -1;
      } else {
        answer[i][j] = arr1[i][j] + arr2[i][j];
      }
    }
  }

  return answer;
}
let arr1 = [
  [5, 7, 1],
  [2, 3, 5]
];
let arr2 = [
  [5, 1, 6],
  [7, 5, 6]
];
let signs = [
  [true, true, false],
  [false, true, false]
];
console.log(solution(arr1, arr2, signs));

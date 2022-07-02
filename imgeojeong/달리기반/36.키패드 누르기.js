function solution(numbers, hand) {
  var answer = '';
  const array = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ['*', 0, '#']
  ];
  const leftThumb = [1, 4, 7];
  const rightThumb = [3, 6, 9];

  let leftLocate = array[3][0];
  let rightLocate = array[3][2];

  for (let i = 0; i < numbers.length; i++) {
    if (leftThumb.includes(numbers[i])) {
      answer += 'L';
      array.forEach(function (it, index) {
        if (it.indexOf(numbers[i]) !== -1) {
          leftLocate = array[index][it.indexOf(numbers[i])];
          return;
        }
      });
    } else if (rightThumb.includes(numbers[i])) {
      answer += 'R';
      array.forEach(function (it, index) {
        if (it.indexOf(numbers[i]) !== -1) {
          rightLocate = array[index][it.indexOf(numbers[i])];
          return;
        }
      });
    } else {
      for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
          
        }
      }
    }
  }

  return answer;
}
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));

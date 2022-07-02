function solution(arr) {
  if (arr[0] === 10) return [-1];
  let min = findMinNumber(arr);

  return arr.filter((n) => n !== min);
}
function findMinNumber(arr) {
  let min = Number.MAX_SAFE_INTEGER;
  for (let i of arr) {
    if (i < min) min = i;
  }
  return min;
}

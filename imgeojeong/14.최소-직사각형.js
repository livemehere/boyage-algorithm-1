function solution(sizes) {
  let answer = 0;
  let max_v = 0;
  let max_h = 0;
  for (let i = 0; i < sizes.length; i++) {
    let v = Math.max(sizes[i][0], sizes[i][1]);
    let h = Math.min(sizes[i][0], sizes[i][1]);
    max_v = Math.max(max_v, v);
    max_h = Math.max(max_h, h);
  }
  return (answer = max_v * max_h);
}

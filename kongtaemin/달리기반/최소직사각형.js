function solution(sizes) {
  let answer = 0;
  let max_w = Number.MIN_SAFE_INTEGER;
  let max_h = Number.MIN_SAFE_INTEGER;

  sizes.forEach((arr) => {
    let w = Math.max(arr[0], arr[1]);
    let h = Math.min(arr[0], arr[1]);

    max_w = Math.max(max_w, w);
    max_h = Math.max(max_h, h);
  });

  return max_w * max_h;
}

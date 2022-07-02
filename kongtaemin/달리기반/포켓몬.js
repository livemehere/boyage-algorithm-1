function solution(nums) {
  const max = nums.length / 2;
  nums = Array.from(new Set(nums));
  return nums.length > max ? max : nums.length;
}

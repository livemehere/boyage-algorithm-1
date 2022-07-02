function solution(nums) {
  let answer;
  const set = new Set(nums);
  answer = set.size > nums.length / 2 ? nums.length / 2 : set.size;
  return answer;
}

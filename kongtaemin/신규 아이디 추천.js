function solution(nums) {
  let answer = 0;
  let n = nums.length;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) answer++;
      }
    }
  }

  return answer;
}
    
function isPrime(n) {
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

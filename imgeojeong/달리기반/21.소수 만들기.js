function isPrime(num) {
  if (num === 2) {
    return true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

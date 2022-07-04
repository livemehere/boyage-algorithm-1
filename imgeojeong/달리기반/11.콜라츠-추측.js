function solution(num) {
  let answer = 0;
  let count = 0;

  if (num == 1) {
    return (answer = 0);
  }

  while (num != 1) {
    if (count == 500) {
      return (answer = -1);
    }

    if (num % 2 == 0) {
      num /= 2;
    } else {
      num = num * 3 + 1;
    }
    count++;
  }

  return (answer = count);
}

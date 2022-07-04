function solution(answers) {
  const answer = [];
  const check = [0, 0, 0];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i = 0, j = 0; i < answers.length; i++, j++) {
    if (j > first.length - 1) {
      j = 0;
    }

    if (answers[i] == first[j]) {
      check[0]++;
    }
  }
  for (let i = 0, j = 0; i < answers.length; i++, j++) {
    if (j > second.length - 1) {
      j = 0;
    }

    if (answers[i] == second[j]) {
      check[1]++;
    }
  }
  for (let i = 0, j = 0; i < answers.length; i++, j++) {
    if (j > third.length - 1) {
      j = 0;
    }

    if (answers[i] == third[j]) {
      check[2]++;
    }
  }

  for (let i = 0; i < check.length; i++) {
    if (check[i] == Math.max(...check)) {
      answer.push(i + 1);
    }
  }

  return answer;
}

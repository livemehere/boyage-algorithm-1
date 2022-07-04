function solution(strings, n) {
  var answer = [];
  const alphabet = [];
  let i = 0,
    j = 0;
  strings.sort();
  for (let i = 0; i < strings.length; i++) {
    alphabet.push(strings[i][n]);
  }
  alphabet.sort();

  while (i < alphabet.length && j < alphabet.length) {
    if (alphabet[i] == strings[j][n] && !answer.includes(strings[j])) {
      answer.push(strings[j]);
      j = 0;
      i++;
    } else {
      j++;
    }
  }

  return answer;
}

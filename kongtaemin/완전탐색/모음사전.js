function solution(word) {
  var answer = 0;
  let alpa = ["A", "E", "I", "O", "U"];
  let dictionary = [];

  function DFS(l, n, w) {
    if (n === 6) {
      return;
    } else {
      w += alpa[l];
      dictionary.push(w);
      for (let i = 0; i < alpa.length; i++) {
        DFS(i, n + 1, w);
      }
    }
  }

  for (let i = 0; i < alpa.length; i++) {
    DFS(i, 1, "");
  }

  dictionary = dictionary.sort();

  answer = dictionary.indexOf(word) + 1;

  return answer;
}

console.log(solution("AAAAE"));

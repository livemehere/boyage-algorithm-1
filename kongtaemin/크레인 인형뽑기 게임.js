function solution(board, moves) {
  let answer = 0;
  const basket = [];

  moves.forEach((m) => {
    put(pick(m));
  });

  function pick(line) {
    const idx = line - 1;

    for (let i = 0; i < board.length; i++) {
      let pointer = board[i][idx];
      if (pointer !== 0) {
        board[i][idx] = 0;
        return pointer;
      }
    }
  }

  function put(item) {
    const last = basket[basket.length - 1];
    if (last && last === item) {
      basket.pop();
      answer += 2;
    } else {
      basket.push(item);
    }
  }
  return answer;
}

function solution(board, moves) {
  let depth = board.length;
  let basket = [];
  let deletedCnt = 0;
  moves.forEach((line) => {
    for (let i = 0; i < depth; i++) {
      if (board[i][line - 1] != 0) {
        // 위에서부터 아래로 집게가 내려가는데 물건이있으면
        basket.push(board[i][line - 1]); // 담기
        board[i][line - 1] = 0; // 비우기
        break;
      }
    }
  });

  let doAgain = true;
  while (doAgain) {
    const { b, isDetected } = boom(basket);
    doAgain = isDetected;
    if (isDetected) {
      basket = b;
      deletedCnt += 2;
    }
  }

  return deletedCnt;
}

function boom(basket) {
  let b = [...basket];
  let isDetected = false;
  for (let i = 0; i < b.length - 1; i++) {
    if (b[i] == b[i + 1]) {
      isDetected = true;
      b = b.filter((n, idx) => {
        if (idx == i || idx == i + 1) {
          return false;
        } else {
          return true;
        }
      });
      break;
    }
  }
  return { b, isDetected };
}

function solution(numbers, hand) {
  let answer = "";
  let leftP = "*";
  let rightP = "#";
  const pad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];
  console.log(getDistance("*", 4));

  numbers.forEach((n) => {
    if (n === 1 || n === 4 || n === 7) {
      answer += "L";
      leftP = n;
    } else if (n === 3 || n === 6 || n == 9) {
      answer += "R";
      rightP = n;
    } else {
      // 2,5,8,0 의 경우
      let leftD = getDistance(leftP, n);
      let rightD = getDistance(rightP, n);

      if (leftD < rightD) {
        answer += "L";
        leftP = n;
      } else if (leftD > rightD) {
        answer += "R";
        rightP = n;
      } else {
        if (hand === "left") {
          answer += "L";
          leftP = n;
        } else {
          answer += "R";
          rightP = n;
        }
      }
    }
  });

  function getDistance(current, target) {
    const currRow = getRow(current);
    const currCol = pad[currRow].indexOf(current);
    const targetRow = getRow(target);
    const targetCol = pad[targetRow].indexOf(target);
    // const xGap = Math.pow((currRow - targetRow),2);
    // const yGap = Math.pow((currCol - targetCol),2);
    // const distance = Math.sqrt(xGap + yGap);

    const distance =
      Math.abs(currRow - targetRow) + Math.abs(currCol - targetCol);

    return distance;
  }

  function getRow(clicked) {
    let result;
    if (clicked !== 0 && clicked < 4) {
      result = 0;
    } else if (clicked !== 0 && clicked < 7) {
      result = 1;
    } else if (clicked !== 0 && clicked < 10) {
      result = 2;
    } else {
      return 3;
    }
    return result;
  }
  return answer;
}

function solution(numbers, hand) {
  let answer = "";
  const leftSide = [1, 4, 7];
  const rightSide = [3, 6, 9];
  let curL = [3, 0];
  let curR = [3, 2];

  const pad = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  numbers.forEach((number) => {
    for (let i = 0; i < pad.length; i++) {
      if (pad[i].includes(number) && leftSide.includes(number)) {
        answer += "L";
        curL = [i, pad[i].findIndex((n) => n === number)];
        break;
      } else if (pad[i].includes(number) && rightSide.includes(number)) {
        answer += "R";
        curR = [i, pad[i].findIndex((n) => n === number)];
        break;
      } else if (pad[i].includes(number)) {
        const curP = [i, pad[i].findIndex((n) => n === number)];
        const leftD = Math.abs(curL[0] - curP[0]) + Math.abs(curL[1] - curP[1]);
        const rightD =
          Math.abs(curR[0] - curP[0]) + Math.abs(curR[1] - curP[1]);
        if (leftD === rightD) {
          if (hand === "right") {
            answer += "R";
            curR = curP;
            break;
          } else {
            answer += "L";
            curL = curP;
            break;
          }
        } else {
          if (leftD > rightD) {
            answer += "R";
            curR = curP;
            break;
          } else {
            answer += "L";
            curL = curP;
            break;
          }
        }
      }
    }
  });

  return answer;
}

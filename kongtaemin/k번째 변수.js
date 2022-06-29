function solution(array, commands) {
  return commands.map((command) => {
    let slicedArr = array.slice(command[0] - 1, command[1]);
    slicedArr.sort((a, b) => a - b);
    let k = slicedArr[command[2] - 1];
    return k;
  });
}

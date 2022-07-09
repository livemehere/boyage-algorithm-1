function solution(operations) {
  const queue = [];
  operations.forEach((op) => {
    const operation = op.split(" ")[0];
    const target = parseInt(op.split(" ")[1]);
    if (operation === "I") {
      queue.push(target);
    } else if (operation === "D" && queue.length !== 0) {
      if (target === 1) {
        const max = Math.max(...queue);
        const idx = queue.indexOf(max);
        queue.splice(idx, 1);
      } else {
        // -1 경우
        const min = Math.min(...queue);
        const idx = queue.indexOf(min);
        queue.splice(idx, 1);
      }
    }
  });

  if (queue.length === 0) return [0, 0];

  const max = Math.max(...queue);
  const min = Math.min(...queue);

  return [max, min];
}

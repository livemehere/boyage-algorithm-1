function solution(priorities, location) {
  const arr = priorities.map((priority, index) => {
    return {
      index: index,
      priority: priority
    };
  });

  const queue = [];

  while (arr.length > 0) {
    let firstEle = arr.shift();
    let hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}

console.log(solution([2, 1, 3, 2], 2));

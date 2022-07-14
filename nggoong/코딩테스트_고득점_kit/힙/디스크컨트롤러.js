const solution = (jobs) => {
    let answer = 0;
    let j = 0;
    let time = 0;
    jobs.sort((a, b) => {
      return a[0] - b[0];
    });
  
    const priorityQueue = [];
      // j가 jobs의 길이보다 크거나 같으면 jobs에 있는 일을 다 했다는 것
  //     j는 시간이 아님
  //     우선순위 큐의 길이가 0이면 모든 일을 다 끝냈다는 것
    while (j < jobs.length || priorityQueue.length !== 0) {
  //       jobs에 아직 수행하지 못한 일들이 남아있고
  //       현재 소요된 시간이 jobs에 있는 작업이 요청된 시간을 지났으면
      if (jobs.length > j && time >= jobs[j][0]) {
        priorityQueue.push(jobs[j++]); // 
        priorityQueue.sort((a, b) => {
          return a[1] - b[1];
        }); // 기다리는 작업들 중에 소요 시간이 가장 짧은게 먼저 수행되어야하므로 정렬
        continue;
      }
        // 우선순위 큐의 길이가 0이 아니면
      if (priorityQueue.length !== 0) {
        time += priorityQueue[0][1];
        answer += time - priorityQueue[0][0];
        priorityQueue.shift();
          // 기본적으로 추가하는 로직
      } else {
        time = jobs[j][0];
      }
    }
    return parseInt(answer / jobs.length);
  };
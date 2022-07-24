// 연습문제: 디스크 컨트롤러
// https://school.programmers.co.kr/learn/courses/30/lessons/42627
// TODO: WIP

// function solution(jobs) {
//   // 스케줄링 문제 진짜 고댓적 기억을 끌어올려야 한다.. 걍 머리 백지화

//   // 답
//   var answer = 0;
//   // 현재시각
//   let tick = 0;
//   // 현재 작업목록에 올라간 작업들
//   let on_work = null;
//   // 바로 다음 작업
//   let next_work = null;
//   // 남은 작업들
//   let jobs_left = [...jobs];
//   jobs_left.sort((a, b) => (a[0] - b[0] < 0 ? -1 : 1));
//   // 요청부터 종료까지 시간 배열
//   let time = [];
//   // 진행중인 작업의 종료예정시간
//   let end = 0;

//   while (true) {
//     if (on_work) {
//       console.log("onwork", on_work, "nextwork", next_work, tick, end);
//       if (tick == end) {
//         console.log("pop", on_work, jobs_left, tick, next_work);
//         answer += tick - on_work[0];
//         if (jobs_left.length == 0) break;
//         else {
//           const tmp = jobs_left.indexOf(on_work);
//           jobs_left.splice(tmp, 1);

//           on_work = next_work;
//           end = tick + next_work[1];
//           next_work = null;

//           console.log("answer", answer);
//         }
//       } else if (!next_work) {
//         // 현재 작업 진행중 요청이 들어오는 작업들
//         const available = [...jobs_left].filter((x) => x[0] <= end);
//         available.sort((a, b) => (a[1] - b[1] < 0 ? -1 : 1));

//         next_work = available.length != 0 ? available[0] : null;
//       }
//     } else {
//       // 현재 작업이 없다면 하나 빼서 실행
//       const now = jobs_left.shift();
//       // 현재 작업 업데이트
//       on_work = now;
//       // 종료시점 업데이트
//       end = tick + now[1];
//     }
//     tick++;
//     console.log("tick!", tick);
//   }

//   return answer / jobs.length;
// }


function solution(jobs) {
    // 스케줄링 문제 진짜 고댓적 기억을 끌어올려야 한다.. 걍 머리 백지화
  
    // 답
    var answer = 0;
    // 현재시각
    let tick = 0;
    // 현재 작업중
    let on_work = null;
      // 작업중에 들어오는 요청
      let heap = []
    // 남은 작업들
    let jobs_left = JSON.parse(JSON.stringify(jobs));
    jobs_left.sort((a, b) => (a[0] - b[0] < 0 ? -1 : 1));
    // 진행중인 작업의 종료예정시간
    let end = 0;

    function getHeap(endtime) {
        console.log("힙 생성 함수 실행 endtime:", endtime)
        return JSON.parse(JSON.stringify(jobs_left)).filter((x) => x[0] <= endtime)
                            .sort((a, b) => (a[1] - b[1] < 0 ? -1 : 1));
    }
    function fdIdx(elem) {
        console.log(jobs_left);
        let res = false
        for(let i = 0; i < jobs_left.length; i++){
            if ((jobs_left[i][0] == elem[0]) && (jobs_left[i][1] == elem[1])) res = i
        }
        console.log("res", res);
        return res
    }
  
    while (true) {
        if (tick == 30) break
      if (on_work) {
        console.log("onwork:", on_work, "heap:", heap, "end:", end);
        if (tick == end) {
          console.log("pop:", on_work, "left:", jobs_left);
          answer += tick - on_work[0];
          if (jobs_left.length == 0) break;
          else {
            const tmp = fdIdx(on_work)
            if(tmp !== false) jobs_left.splice(tmp, 1);
            
            on_work = heap.shift();
            end = tick + on_work[1];

            heap = getHeap(tick + on_work[1])
            console.log("힙 리뉴얼!", heap, end)
            console.log("answer", answer);
          }
        }
      } else {
        console.log("현재 작업 있어?")
        // 현재 작업이 없다면 하나 빼서 실행
        const now = jobs_left.shift();
        // 현재 작업 업데이트
        on_work = now;
        // 종료시점 업데이트
        end = tick + now[1];
        // 힙 업데이트
        heap = getHeap(end)
        console.log("현재 작업이 없어서 힙만들었다", heap)
      }
      tick++;
      console.log("#", tick);
    }
  
    return answer;
  }

// console.log(
// solution([
//   [0, 3],
//   [1, 9],
//   [2, 6],
// ]))

console.log(solution([[0, 10], [4, 10], [15, 2], [5, 11]]));
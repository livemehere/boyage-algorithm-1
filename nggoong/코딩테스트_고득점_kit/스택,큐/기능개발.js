// 기능개발
// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    var answer = [];
    

    while(progresses.length > 0) {
        let count = 0;
        // 각 speeds만큼 한번씩 차근차근 더해감
        progresses = progresses.map((value, index) => {
            return value + speeds[index];
        })
        const len = progresses.length;
//         더하고 난 뒤 첫번재 요소가 100 이상이면
        for(let i = 0; i < len; i++) {
            if(progresses[0] >= 100) {
                progresses.shift();
                speeds.shift();
                count++; // 몇개의 기능이 배포되는지 카운트
            }
//             첫번째 요소가 100이 아니면
//             다른 것도 배포가 되지 않기 때문에 break로 빠져나가고
//             위에서 다시 speed만큼 더해줌
            else {
                break;
            }
        }
        if(count > 0) answer.push(count);
    }
    return answer;
}
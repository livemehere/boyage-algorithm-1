// 프린터
// 

function solution(priorities, location) {
    var answer = 0;
    let max = Math.max(...priorities);
    let count = 1;
//     1. 일단 최댓 값을 구함 prior에서
//     2. [0]이 최댓값일때 까지 push shift()를 반복함
//     3. [0]이 최댓값이면 shift()만 해서 삭제하고 count를 1 더함
//     4. 그리고 최댓값을 다시 구함
//     위 과정을 반복하되 count을 3번과정을 거칠대 +1해야함
//     location을 2번과정을 거칠때 -1해서 위치를 알고있어야함
    
    while(1) {
        if(priorities[0] !== max) {
            priorities.push(priorities[0]);
            priorities.shift();
            location-=1;
            if(location < 0) location = priorities.length - 1;
        }
        else if(priorities[0] === max){
            if(location === 0) {
                answer = count;
                break;   
            }
            else {
                priorities.shift();
                // shift하면 location도 같이 줄어들기 때문에 해줘야함
                location-=1;
                count++;
                max = Math.max(...priorities);
            }
        }
    }
    
    return answer;
}
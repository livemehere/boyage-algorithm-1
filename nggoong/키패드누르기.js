// 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    let answer='';
    // 중간 키패드
    let centerLine = [2, 5, 8, 11];
    // 왼손 시작지점
    let currentL = 10;
    // 오른손 시작지점
    let currentR = 12;
    let distanceL = 0;
    let distanceR = 0;
    
    for(let i = 0; i < numbers.length; i++) {
        let value = numbers[i];
        /* 가운데 키패드가 아닌 경우 */
        if(numbers[i] === 0) value = 11;
        if(value === 1 || value === 4 || value === 7) {
            // 왼손으로 눌렀음을 answer에 push
            answer += 'L';
            // 현재 왼손 위치 갱신
            currentL = value;
        }
        else if(value === 3 || value === 6 || value === 9) {
            // 오른손으로 눌렀음을 answer에 push
            answer += 'R';
            // 현재 오른손 위치 갱신
            currentR = value;
        }

        /* 가운데 키패드를 눌러야할 경우 */
        else {
            // 오른손의 현재 위치가 가운데 키패드에 있다면
            if(centerLine.indexOf(currentR) !== -1) {
                // 눌러야할 값 - 현재 위치한 값
                // 음수 방지하기 위해 절대값
                // 3을 나눈 이유는 가운데 패드는 값이 3씩 차이나는데
                // 실제로 위 아래로 이동 시 옮겨가는 거리는 1이다.
                distanceR = Math.abs(value - currentR) / 3;
            }
            // 오른손의 현재 위치가 가운데 키패드에 없다면
            // 눌러야할 키패드(value)의 값을 오른쪽으로 이동
            // 그 후 3을 나눠 거리를 계산(세로 거리 계산)
            // 그리고 1을 더해줘서 가로거리 계산
            else distanceR = Math.abs(value + 1 - currentR ) / 3 + 1;

            if(centerLine.indexOf(currentL) !== -1) {
                distanceL = Math.abs(value - currentL) / 3;
            }

            // 눌러야할 키패드(value)의 값을 왼쪽으로 이동
            // 그 후 3을 나눠 세로 거리를 계산
            else distanceL = Math.abs(value -1  - currentL ) / 3 + 1;

            // 거리가 같다면 오른손잡이 또는 왼손잡이로 결정
            if(distanceL == distanceR) {
                if(hand === 'right') {
                    answer += 'R';
                    currentR = value;
                }
                else {
                    answer += 'L';
                    currentL = value;
                }
            }
            // 거리가 가까운 손으로 위치 갱신
            else if(distanceL > distanceR) {
                answer += 'R';
                currentR = value;
            }
            else if(distanceL < distanceR) {
                answer += 'L';
                currentL = value;
            }
        }
    }

    return answer;
}
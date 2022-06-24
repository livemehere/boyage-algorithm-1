function solution(a, b) {
    let count = 0;
    // 2016년 1월 1일이 금요일이기 때문에 금요일을 기준으로 하기 위해
    // 금요일을 0인덱스로 시작
    const day = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

    // 2016년은 윤년이므로 2월을 29일로 설정
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // 5월 26일이라면 a가 5인데, 4월까지는 전체 일 수를 더하고
    // 마지막 월인 5월은 b만큼만 더하면 되므로 a - 1만큼 더함
    for (let i = 0; i < a - 1; i++) {
        count += month[i]
    }

    // 마지막 월 일수 계산
    // -1은 1월 1일(기준일)로부터 계산하기 때문에 기준일을 빼주기 위함
    count += b - 1;
    
    answer = day[(count) % 7];
    return answer;
}
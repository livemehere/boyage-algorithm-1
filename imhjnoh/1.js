// 연습문제: 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
    // NOTE: 2016년만 구하면 됨. 2월은 항상 29일
    // 전체 날짜의 수를 합산한 후 7로 mod한 값을 weeks에서 반환
    let calendar = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    let weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"]
    let dates = b
    for (let i = 1; i < a; i++){
        dates += calendar[i - 1]
    }
    
    return weeks[dates % 7];
}

// 2016년 5월 8일의 요일
console.log(solution(5,8));

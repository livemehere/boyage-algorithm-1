// 연습문제: 최소직사각형
// https://programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
    // 가로세로가 아니라 작은길이-큰길이로 배열 순서를 변경
    let sorted_size = sizes.map(x => x[0] > x[1] ? [x[1],x[0]] : [x[0],x[1]])
    // [작은 길이 중 가장 큰 길이, 큰 길이 중 가장 큰 길이] 를 리턴
    let max_sizes = sorted_size.reduce((y,x) => [Math.max(y[0], x[0]), Math.max(y[1], x[1])])
    return max_sizes[0] * max_sizes[1];
}

// 133
console.log(solution([[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]));
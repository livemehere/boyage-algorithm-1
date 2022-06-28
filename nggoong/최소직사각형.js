// 최소직사각형
// https://programmers.co.kr/learn/courses/30/lessons/86491


// 기본적으로 가로, 세로에 대한 개념을 잊어야함.
function solution(sizes) {
    var answer = 0;
    let long = [];
    let short = [];
    
    for (let size of sizes) {
        let [w, h] = size;
        // 두 개를 비교해서 긴건 long에 push
        long.push(Math.max(w, h));
        //  짧은건 short에 push
        short.push(Math.min(w, h));
    }
    
    // long중에 가장 긴 것과 short 중에 가장 긴 것을 곱함
    answer = Math.max(...long) * Math.max(...short);
    return answer;
}
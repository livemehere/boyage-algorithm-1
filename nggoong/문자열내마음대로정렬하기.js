// 문자열 내 마음대로 정렬하기
// https://programmers.co.kr/learn/courses/30/lessons/12915


function solution(strings, n) {
    var answer = [];
    answer = Array.from(strings)
    
    answer = answer.sort((a, b)=> {
        if(a[n] < b[n]) return -1;
        else if(a[n] > b[n]) return 1;
        else if (a[n] === b[n]) return a < b ? -1 : 1;
    });
    return answer;
}

// javascript sort()
// -1을 반환하면 a를 b보다 앞에 둠
// 1을 반환하면 a가 b보다 뒤에 감
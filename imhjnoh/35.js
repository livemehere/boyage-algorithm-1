// 연습문제: [1차] 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

function solution(n, arr1, arr2) {
    return arr1.map((x, idx) => {
        let out = (x | arr2[idx]).toString(2)
                       .replace(/[1]/g, "#")
                       .replace(/[0]/g, " ");
        if (out.startsWith("#") && (out.length < n)) return " ".repeat(n - out.length) + out
        else return out
    });
}

// 프로그래머스 숏코딩
// padStart(l [, s]): 문자열 맨 앞에 l만큼 s를 반복하여 추가해줌
var solution2=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))


// ["######", "### #", "## ##", " #### ", " #####", "### # "]
console.log(solution(6, [46, 33, 33 ,22, 31, 50], [27 ,56, 19, 14, 14, 10]));

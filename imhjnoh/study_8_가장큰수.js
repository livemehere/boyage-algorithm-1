// 연습문제: 가장 큰 수
// https://school.programmers.co.kr/learn/courses/30/lessons/42746
// TODO: WIP

function solution(numbers) {
    // numbers.sort().reverse()
    numbers.sort((a,b) => {
        const ta = String(a)
        const tb = String(b)
        console.log("compare",ta,tb)
        
        if(ta[0] != tb[0] || !(ta.includes(tb) || tb.includes(ta))){
            if (ta < tb) return 1
            else return -1
        }else{
            const shorter = Math.min(ta.length, tb.length)
            const ta_arr = ta.split(/(..)/).filter(x => x!=='')
            const tb_arr = tb.split(/(..)/).filter(x => x!=='')
        }
    })
    // console.log(numbers)
    // let tmp1 = [...numbers].filter(x => !x.toString().match(/\d[0]$/))
    // let tmp2 = [...numbers].filter(x => x.toString().match(/\d[0]$/))
    // let answer = [...tmp1, ...tmp2]
    // console.log(tmp1, tmp2)
    // return numbers.join("");
    return numbers.join("")
}
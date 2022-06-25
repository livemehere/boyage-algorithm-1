// 연습문제: 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
    // NOTE: 로또 등수의 경우의 수가 7개인 점을 생각해내는 데에 시간이 다소 걸렸다.
    // 당첨번호 1~6개까지 각각 6~1등인 것은 맞지만, 모두 틀렸을 때에도 똑같이 6등이라는 점을 반영했다.
    let best_rank = 1
    let worst_rank = 7
    
    // 당첨번호면 최저등수 1 감소 
    // 낙첨번호면 최고등수 1 증가
    // 모르는 경우는 아무 작업도 하지 않음
    lottos.forEach(elem => {
        if (elem != 0){
            if (win_nums.indexOf(elem) != -1){
                worst_rank -= 1
            } else {
                best_rank += 1
            }
        }
    })
    
    return [best_rank > 6 ? 6 : best_rank, worst_rank > 6 ? 6 : worst_rank];
}


console.log(solution([1,2,3,4,5,6], [1,2,3,4,5,6]));
console.log(solution([0,0,0,0,0,0], [1,2,3,4,5,6]));
console.log(solution([7,8,9,10,11,12], [1,2,3,4,5,6]));

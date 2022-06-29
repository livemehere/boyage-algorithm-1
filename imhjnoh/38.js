// 연습문제: 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
    var answer = 0;
    let bucket = []
    for (let i = 0; i < moves.length; i++){
        let curr_lain = moves[i] - 1
        
        for (let j = 0; j < board.length; j++){
            let doll = board[j][curr_lain]
            if(doll != 0){
                let bucket_last = bucket.pop()
                if(doll != bucket_last) {
                    bucket.push(bucket_last)
                    bucket.push(doll)
                }else{
                    answer += 2
                }
                board[j][curr_lain] = 0
                break
            }
        }
    }
    return answer;
}

// 4
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
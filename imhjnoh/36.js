// 연습문제: 키패드 누르기
// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
    var answer = '';
    let curr = [10, 11] //[L, R] = ["*", "#"]
    let d_map = {2:[3,1,0,1,2,1,2,3,2,3,4,4],
                5:[2,2,1,2,1,0,1,2,1,2,3,3],
                8:[1,3,2,3,2,1,2,1,0,1,2,2],
                0:[0,4,3,4,3,2,3,2,1,2,1,1]}
    numbers.forEach((t, idx) => {
        if (t == 1 || t == 4 || t == 7 || t == "*") {
            answer += "L"
            curr[0] = t
        }
        else if (t == 3 || t == 6 || t == 9 || t == "#") {
            answer += "R"
            curr[1] = t
        }
        else {
            console.log(curr,"L_length:",d_map[t][curr[0]], "R_length:", d_map[t][curr[1]], answer)
            if(d_map[t][curr[0]] == d_map[t][curr[1]]){
                if (hand === "left"){
                    answer += "L"
                    curr[0] = t
                }else{
                    answer += "R"
                    curr[1] = t
                }
            }else{
                if (d_map[t][curr[0]] < d_map[t][curr[1]]) {
                    answer += "L"
                    curr[0] = t
                }else{
                    answer += "R"
                    curr[1] = t
                }
            }
        }
    })
    return answer;
}

// "LRLLLRLLRRL"
console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
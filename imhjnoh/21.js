// 연습문제: 소수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function solution(nums) {
    let cases = 0
    
    // 모든 더하는 경우의 수
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            for(let k = j + 1; k < nums.length; k++){
                
                let sum = nums[i] + nums[j] + nums[k]
                let flag = true
                
                // 소수판별
                // 스스로 풀이 후에 찾아보니 소수판별은 제곱근까지만 돌려도 된다는듯.
                if (sum%2 == 0) continue;
                for(let l = 2; l < parseInt(sum/2); l++){
                    if (sum%l == 0) flag = false
                }
                if (flag == true) cases += 1
                    
            }
        }
    }

    return cases;
}

console.log(solution([1,2,7,6,4]));
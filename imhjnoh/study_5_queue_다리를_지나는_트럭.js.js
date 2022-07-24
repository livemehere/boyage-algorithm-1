// 연습문제: 다리를 지나는 트럭
// https://school.programmers.co.kr/learn/courses/30/lessons/42583
// TODO: WIP

function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    
    let on_list = [truck_weights[0]]
    let wait_list = [...truck_weights]
    wait_list.shift()
    let sum_weight = truck_weights[0]
    
    truck_weights.forEach((x, i) => {
        if (i !== 0 && on_list.length < bridge_length && sum_weight + x <= weight){
            on_list.push(wait_list.shift())
            sum_weight += x
        }
        sum_weight -= on_list.shift()
        answer += bridge_length - on_list.length + 1
    })
    return answer;
}

console.log(solution(2,10,[7,4,5,6]))
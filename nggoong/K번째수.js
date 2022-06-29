function solution(array, commands) {
    var answer = [];
    for(let i of commands) {
        // 구조분해 할당으로 from, to, k를 사용하기 쉽게 함
        let [from, to, k] = i;
        // from부터 to까지 추출
        temp = array.slice(from - 1, to);
        // 오름차순으로 정렬 후
        temp = temp.sort(function(a,b){
            return a-b;
        });
        console.log(temp)
        // K번째로 큰 수 push
        answer.push(temp[k-1]);
    }
    
    return answer;
}
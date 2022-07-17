function solution(operations) {
    var answer = [];
    let query = [];
    let data = [];
    let result = [];
    let shouldDelete = 0;
    for(let i of operations) {
        console.log(i.split(' '));
        let [temp_query, temp_data] = i.split(' ');
        query.push(temp_query);
        data.push(temp_data);
    }
    
    
    for(let i = 0; i < operations.length; i++) {
        if(query[i] === "I"){
            result.push(Number(data[i]));
        }
        else if(query[i] === "D") {
            if(result.length!==0) {
                if(data[i] === '-1') {
                    shouldDelete = Math.min(...result);
                }
                else if(data[i] === '1'){
                    shouldDelete = Math.max(...result);
                }
                result = result.filter((element) => element !== shouldDelete);
            }
            else if(result.length === 0) continue;
        }
    }
    if(!result.length) answer = [0,0];
    else {
        answer.push(Math.max(...result));
        answer.push(Math.min(...result))
    }
    return answer;
}
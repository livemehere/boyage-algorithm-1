// [1차] 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
    var answer = [];
    // toString(2)로 이진수 변환
    // for문을 이용하여 arr1, arr2를 이진수로 변환
    // padStart()를 이용하여 자릿수 통일
    // for문으로 index 순회하면서 둘 중 하나라도 1이면 #
    // 둘 다 0이면 공백으로 answer에 push
    for(let i = 0; i < n; i++) {
        let str_result = "";
        let temp1 = arr1[i].toString(2).padStart(n, '0');
        let temp2 = arr2[i].toString(2).padStart(n, '0');
        for(let j = 0; j < temp1.length; j++) {
            if(temp1[j] === '1' || temp2[j] === '1') str_result+='#';
            else if(temp1[j] === '0' && temp2[j] === '0') str_result+=" "
        }
        answer.push(str_result);
    }
    return answer;
}
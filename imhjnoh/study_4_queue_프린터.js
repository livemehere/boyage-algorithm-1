function solution(priorities, location) {
    var answer = 0;
    
    class Queue {
      constructor() {
        this._arr = [];
      }
      enqueue(item) {
        this._arr.push(item);
      }
      dequeue() {
        return this._arr.shift();
      }
    }
    
    const queue = new Queue();
    
    // 큐에 일단 세팅한다.
    priorities.forEach((x, idx) => {
        queue.enqueue([idx, x])
    })
    
    while(true){
        // 일단 처음꺼 뽑기
        const doc = queue.dequeue()
        // max 구하기
        const arr = [...queue._arr].map(x => x[1])
        const maxarr = Math.max(...arr)
        
        // 뒤에 우선순위가 더 높은 게 하나라도 있으면 맨 뒤에 인큐
        if( doc[1] < maxarr ) {
            queue.enqueue(doc)
        }
        else{
            // 현재 뽑은 것이 찾는 문서라면 리턴
            if( doc[0] === location ) {
                return answer + 1
            }
            // 아니라면 프린트된 문서 수 + 1
            else {
                answer++
                 }
        }
    }
    
    return queue._arr;
}

// 5
console.log(solution([1,1,9,1,1,1], 0))
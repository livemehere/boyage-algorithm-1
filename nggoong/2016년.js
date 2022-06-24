function solution(a, b) {
    let count = 0;
    const day = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
      for(let i = 0; i < a - 1; i++) {
          count += month[i]
      }
      count += b - 1;
      answer = day[(count) % 7];
      return answer;
  }
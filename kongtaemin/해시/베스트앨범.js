function solution(genres, plays) {
  let answer = [];
  let n = plays.length;
  let arr = [];
  let total = new Map();

  for (let i = 0; i < n; i++) {
    let prev = total.get(genres[i]) || 0;
    prev = parseInt(prev);
    total.set(genres[i], [prev + plays[i], 0]);
    arr.push({ id: i, genre: genres[i], play: plays[i] });
  }

  arr.sort((a, b) => {
    if (a.play === b.play) {
      return a.id < b.id ? -1 : 1;
    } else {
      return 0;
    }
  }); // 내림차순
  arr.sort((a, b) => (a.play > b.play ? -1 : 1)); // 재생순
  arr.sort((a, b) =>
    Number(total.get(a.genre)[0]) > Number(total.get(b.genre)[0]) ? -1 : 1
  ); // 장르

  arr.forEach((a) => {
    const useCnt = total.get(a.genre)[1];
    if (useCnt < 2) {
      total.set(a.genre, [total.get(a.genre)[0], total.get(a.genre)[1] + 1]);
      answer.push(a.id);
    }
  });

  return answer;
}

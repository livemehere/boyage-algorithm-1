function solution(genres, plays) {
  let answer = [];
  let songs = [];
  let records = {};

  for (let i = 0; i < plays.length; i++) {
    songs.push({
      idx: i,
      genre: genres[i],
      play: plays[i],
    });

    let acc = records[genres[i]] ? records[genres[i]][0] : 0;
    acc = acc + plays[i];
    records[genres[i]] = [acc, 0];
  }

  songs.sort((a, b) => {
    if (a.play === b.play) {
      return a.idx - b.idx; // a > b = + b가 앞. 즉 적은게 앞으로 감. 오름차순
    }
  });

  songs.sort((a, b) => b.play - a.play); // b > a = + b가 앞으로간다. 즉, 내림 차순
  songs.sort((a, b) => records[b.genre][0] - records[a.genre][0]); // b > a = + b가 앞으로, 즉 내림차순

  songs.forEach((s) => {
    if (records[s.genre][1] < 2) {
      answer.push(s.idx);
      records[s.genre][1]++;
    }
  });

  return answer;
}

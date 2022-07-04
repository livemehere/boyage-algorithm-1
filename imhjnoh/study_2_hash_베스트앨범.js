// 연습문제: 베스트앨범
// https://programmers.co.kr/learn/courses/30/lessons/42579

function solution(genres, plays) {
    let answer = []
    // 장르별 재생수
    let plays_g = new Map()
    // 장르별 곡정보
    let musics_g = new Map()
    
    genres.forEach((x, i) => {
        // 장르별 재생수 계산
        if (plays_g.has(x)) plays_g.set(x, plays_g.get(x) + plays[i])
        else plays_g.set(x, plays[i])
        // 장르별 곡정보 추가
        let music = [i, plays[i]]
        if (musics_g.has(x)) musics_g.get(x).push(music)
        else musics_g.set(x, [music])  
    })
    
    // 장르별 재생수 내림차순 정렬
    let tmp = Array.from(plays_g.keys()).sort((a,b) => plays_g.get(b) - plays_g.get(a))
    // 정렬된 장르 이름 배열 돌기
    tmp.forEach((x) => {
        
        musics_g.get(x)                                 // 해당 장르에 속하는 음악 배열
                .sort((a,b) => (a[1] > b[1]) ? -1 : 1)  // 재생수 내림차순으로 정렬
                .slice(0,2)                             // 맨 앞 두 개만 자르기
                .map(x => x[0])                         // 2곡에 대한 곡번호만 있는 배열로 매핑
                .forEach(x => answer.push(x))           // 매핑된 배열에서 1개씩 answer에 푸쉬
        
    })
    
    
    return answer;
}

// [4, 1, 3, 0]
console.log(solution(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500]))
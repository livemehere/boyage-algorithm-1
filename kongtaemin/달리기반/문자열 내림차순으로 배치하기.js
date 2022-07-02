function solution(s) {
  //  문자열 정렬 할 때는 서로 빼지말고, 비교후 직접 return 해줘야함을 잊지말자
  return s
    .split("")
    .sort((a, b) => {
      if (a > b) return -1;
      if (a < b) return 1;
    })
    .join("");
}

function solution(a, b) {
  let weeks = ["THU", "FRI", "SAT", "SUN", "MON", "TUE", "WED"];
  let days = convertPassedMonthToDays(a) + b; // 월을 일수로 변환하고, 총 지나온 일 수 를 계산합니다.
  let dayIdx = days % 7; // 나머지를 통해서 인덱스를 구합니다. 1월1일 날짜가 0번째 인덱스에 들어가있습니다. 그를 기준으로 7 간격으로 요일을 구합니다.
  return weeks[dayIdx];
}

function convertPassedMonthToDays(month) {
  if (month === 1) return 0; // 1번째 달일 경우에는 지나온 일수가 0 입니다.
  let result = 0;
  let thirtyOne = [1, 3, 5, 7, 8, 10, 12]; // 31일에 해당하는 달의 목록

  for (let i = 1; i < month; i++) {
    if (i === 2) {
      // 윤년이기 때문에 2월은 29일 입니다.
      result += 29;
    } else if (thirtyOne.includes(i)) {
      // 31일에 해당하는 월이라면
      result += 31;
    } else {
      // 그 외의 경우라면 모두 30일
      result += 30;
    }
  }
  return result;
}

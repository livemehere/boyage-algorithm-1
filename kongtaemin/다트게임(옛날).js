function solution(dartResult) {
  let points = [];
  let point = 0;

  for (let i = 0; i < dartResult.length; i++) {
    let cur = dartResult[i];
    let prev = dartResult[i - 1];

    if (!isNaN(cur)) {
      // 숫자일 경우
      point = cur === "0" && dartResult[i - 1] === "1" ? 10 : Number(cur);
    } else {
      // 숫자가 아닐 경우
      if (cur === "S") {
        points.push(point);
      } else if (cur === "D") {
        points.push(Math.pow(point, 2));
      } else if (cur === "T") {
        points.push(Math.pow(point, 3));
      } else if (cur === "#") {
        points[points.length - 1] *= -1;
      } else if (cur === "*") {
        points[points.length - 1] *= 2;
        points[points.length - 2] *= 2;
      }
      // end
    }
  }
  console.log(points);

  return points.reduce((arr, cur) => arr + cur);
}

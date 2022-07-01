function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let m1 = arr1[i].toString(2);
    let m2 = arr2[i].toString(2);

    if (m1.length !== n) {
      m1 = "0".repeat(n - m1.length) + m1;
    }

    if (m2.length !== n) {
      m2 = "0".repeat(n - m2.length) + m2;
    }

    let combined = "";
    for (let i = 0; i < n; i++) {
      if (m1[i] === "1" || m2[i] === "1") {
        combined += "#";
      } else {
        combined += " ";
      }
    }
    answer.push(combined);
  }

  return answer;
}

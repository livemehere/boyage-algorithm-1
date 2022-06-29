function solution(n, arr1, arr2) {
  arr1 = convert(arr1, n);
  arr2 = convert(arr2, n);
  console.log(arr1);
  console.log(arr2);

  let answer = arr1.map((a, idx) => {
    let shaps = "";
    for (let i = 0; i < n; i++) {
      if (arr1[idx][i] == "1" || arr2[idx][i] == "1") {
        shaps += "#";
      } else {
        shaps += " ";
      }
    }
    return shaps;
  });

  return answer;
}

function convert(arr, n) {
  arr = arr.map((a) => {
    let final = a.toString(2);
    if (final.length < n) {
      let frontZero = "0".repeat(n - final.length);
      final = frontZero + final;
    }
    return final;
  });
  return arr;
}

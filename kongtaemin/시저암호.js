function solution(s, n) {
  const t1 = "abcdefghijklmnopqrstuvwxyz";
  let c = s.split("");
  c = c.map((i) => {
    if (i === " ") return " ";

    let idx;
    if (t1.includes(i)) {
      const idx = t1.indexOf(i);
      if (idx + n >= 26) {
        return t1[idx + n - 26];
      }
      return t1[idx + n];
    } else {
      const l = i.toLowerCase();
      const idx = t1.indexOf(l);
      if (idx + n >= 26) {
        return t1[idx + n - 26].toUpperCase();
      }
      return t1[idx + n].toUpperCase();
    }
  });

  return c.join("");
}

function solution(t, p) {
  const m = p.length;
  const P = BigInt(p);
  let cnt = 0;

  for (let i = 0; i + m <= t.length; i++) {
    const sub = t.slice(i, i + m);
    if (BigInt(sub) <= P) cnt++;
  }
  return cnt;
}
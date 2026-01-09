function solution(n, w, num) {

  const rows = Math.ceil(n / w);

  const r = Math.floor((num - 1) / w);
  const p = (num - 1) % w;

  const c = (r % 2 === 0) ? p : (w - 1 - p);

  let above = 0;
  for (let rr = r + 1; rr < rows; rr++) {

    const pp = (rr % 2 === 0) ? c : (w - 1 - c);
    const label = rr * w + pp + 1;
    if (label <= n) above++;
  }

  return above + 1;
}

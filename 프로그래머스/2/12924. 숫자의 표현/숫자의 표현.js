function solution(n) {
  let answer = 0;
  const doubleN = 2 * n;

  for (let k = 1; k * k <= doubleN; k++) {
    if (doubleN % k === 0) {
      let pair = doubleN / k;
     if ((pair - k + 1) % 2 === 0) answer++;
    }
  }

  return answer;
}
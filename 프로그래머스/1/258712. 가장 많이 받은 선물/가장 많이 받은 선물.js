function solution(friends, gifts) {
  const n = friends.length;


  const idx = {};
  for (let i = 0; i < n; i++) idx[friends[i]] = i;


  const giveCount = Array.from({ length: n }, () => Array(n).fill(0));


  const given = Array(n).fill(0);
  const received = Array(n).fill(0);


  for (const g of gifts) {
    const [from, to] = g.split(" ");
    const a = idx[from];
    const b = idx[to];

    giveCount[a][b] += 1;
    given[a] += 1;
    received[b] += 1;
  }


  const giftIndex = Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    giftIndex[i] = given[i] - received[i];
  }


  const nextReceive = Array(n).fill(0);


  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const ij = giveCount[i][j];
      const ji = giveCount[j][i];

      if (ij > ji) {

        nextReceive[i] += 1;
      } else if (ji > ij) {
        nextReceive[j] += 1;
      } else {

        if (giftIndex[i] > giftIndex[j]) nextReceive[i] += 1;
        else if (giftIndex[j] > giftIndex[i]) nextReceive[j] += 1;

      }
    }
  }

  let answer = 0;
  for (const v of nextReceive) answer = Math.max(answer, v);
  return answer;
}

function solution(N, stages) {
  const count = new Array(N + 2).fill(0);

  for (const s of stages) {
    if (s <= N + 1) {
      count[s]++;
    }
  }

  const totalPlayers = stages.length;
  let remain = totalPlayers;
  const failRates = [];

  for (let stage = 1; stage <= N; stage++) {
    const stay = count[stage];

    let rate = 0;
    if (remain > 0) {
      rate = stay / remain;
    } else {
      rate = 0;
    }

    failRates.push({ stage, rate });

    remain -= stay;
  }

  failRates.sort((a, b) => {
    if (b.rate !== a.rate) {
      return b.rate - a.rate;
    }
    return a.stage - b.stage; 
  });

  return failRates.map((item) => item.stage);
}
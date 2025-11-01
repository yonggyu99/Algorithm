function solution(want, number, discount) {
  let answer = 0;
  const wantMap = new Map();

  for (let i = 0; i < want.length; i++) {
    wantMap.set(want[i], number[i]);
  }

  for (let i = 0; i <= discount.length - 10; i++) {
    const window = discount.slice(i, i + 10);
    const windowMap = new Map();

    for (let item of window) {
      windowMap.set(item, (windowMap.get(item) || 0) + 1);
    }

    let isSame = true;
    for (let [key, value] of wantMap) {
      if (windowMap.get(key) !== value) {
        isSame = false;
        break;
      }
    }

    if (isSame) answer++;
  }

  return answer;
}
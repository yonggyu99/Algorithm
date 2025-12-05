function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let answer = 0;

  for (const b of babbling) {
    let str = b;

    let isInvalid = false;
    for (const w of words) {
      if (str.includes(w + w)) {
        isInvalid = true;
        break;
      }
    }
    if (isInvalid) continue;

    for (const w of words) {
      str = str.split(w).join(" ");
    }

    if (str.trim() === "") {
      answer++;
    }
  }

  return answer;
}

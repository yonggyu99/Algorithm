function solution(s) {
  const result = [];
  const last_seen = {};

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (last_seen[ch] === undefined) {
      result.push(-1);
    } else {
      result.push(i - last_seen[ch]);
    }
    last_seen[ch] = i; // 현재 위치 갱신
  }

  return result;
}
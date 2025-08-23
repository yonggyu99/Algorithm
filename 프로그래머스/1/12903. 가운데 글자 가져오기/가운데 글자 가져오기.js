function solution(s) {
  const len = s.length;
  
  if (len % 2 === 1) {
    return s[Math.floor(len / 2)];
  } else {
    return s[len / 2 - 1] + s[len / 2];
  }
}
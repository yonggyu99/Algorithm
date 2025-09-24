function solution(s, n) {
  let result = '';

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    if (ch === ' ') {
      result += ' ';
    } else {
      const code = s.charCodeAt(i);

      if (code >= 65 && code <= 90) {
        result += String.fromCharCode(((code - 65 + n) % 26) + 65);
      }
      else if (code >= 97 && code <= 122) {
        result += String.fromCharCode(((code - 97 + n) % 26) + 97);
      }
    }
  }

  return result;
}
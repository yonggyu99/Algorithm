function solution(s) {
  let count = 0;
  const pairs = { ')': '(', ']': '[', '}': '{' };

  for (let i = 0; i < s.length; i++) {
    const rotated = s.slice(i) + s.slice(0, i);
    const stack = [];
    let valid = true;

    for (const ch of rotated) {
        
      if (['(', '[', '{'].includes(ch)) {
        stack.push(ch);
      } else {
          
        if (stack.pop() !== pairs[ch]) {
          valid = false;
          break;
        }
      }
    }

    if (valid && stack.length === 0) count++;
  }

  return count;
}
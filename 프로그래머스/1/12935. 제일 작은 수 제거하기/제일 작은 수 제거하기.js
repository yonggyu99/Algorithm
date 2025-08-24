function solution(arr) {
  if (arr.length === 1) {
    return [-1];
  }
  
  const min = Math.min(...arr);
  return arr.filter(n => n !== min);
}
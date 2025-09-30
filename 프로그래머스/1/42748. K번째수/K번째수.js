function solution(array, commands) {
  return commands.map(([i, j, k]) => {
    const sliced = array.slice(i - 1, j);

    const sorted = sliced.sort((a, b) => a - b);

    return sorted[k - 1];
  });
}
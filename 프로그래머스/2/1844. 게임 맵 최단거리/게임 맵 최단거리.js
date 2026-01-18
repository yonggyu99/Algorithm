function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const dist = Array.from({ length: n }, () => Array(m).fill(0));

  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  const queue = [];
  let head = 0;

  if (maps[0][0] === 0) return -1;

  dist[0][0] = 1;
  queue.push([0, 0]);

  while (head < queue.length) {
    const [r, c] = queue[head++];

    if (r === n - 1 && c === m - 1) return dist[r][c];

    for (let k = 0; k < 4; k++) {
      const nr = r + dr[k];
      const nc = c + dc[k];

      if (nr < 0 || nr >= n || nc < 0 || nc >= m) continue;

      if (maps[nr][nc] === 0) continue;

      if (dist[nr][nc] !== 0) continue;

      dist[nr][nc] = dist[r][c] + 1;
      queue.push([nr, nc]);
    }
  }

  return -1;
}
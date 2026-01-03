function solution(k, dungeons) {
  let answer = 0;
  const n = dungeons.length;
  const visited = new Array(n).fill(false);


  function dfs(currentFatigue, count) {

    if (count > answer) {
      answer = count;
    }

    for (let i = 0; i < n; i++) {
      const [need, cost] = dungeons[i];

      if (visited[i]) continue;
      if (currentFatigue < need) continue;

      visited[i] = true;
      dfs(currentFatigue - cost, count + 1);
      visited[i] = false;
    }
  }

  dfs(k, 0);
  return answer;
}
function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const result = [];

    const dr = [-1, 1, 0, 0];
    const dc = [0, 0, -1, 1];

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                let totalFood = 0;
                let queue = [[i, j]];
                visited[i][j] = true;

                while (queue.length > 0) {
                    const [r, c] = queue.shift();
                    totalFood += Number(maps[r][c]);

                    for (let d = 0; d < 4; d++) {
                        const nr = r + dr[d];
                        const nc = c + dc[d];

                        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols &&
                            maps[nr][nc] !== 'X' && !visited[nr][nc]) {
                            visited[nr][nc] = true;
                            queue.push([nr, nc]);
                        }
                    }
                }
                result.push(totalFood);
            }
        }
    }

    if (result.length === 0) return [-1];
    return result.sort((a, b) => a - b);
}
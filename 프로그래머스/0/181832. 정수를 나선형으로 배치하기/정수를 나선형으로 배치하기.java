class Solution {
    public int[][] solution(int n) {
        int[][] answer = new int[n][n];
        int[] dx = {0, 1, 0, -1};  // 행이동
        int[] dy = {1, 0, -1, 0};  //열이동

        int x = 0, y = 0, dir = 0, num = 1;

        while (num <= n * n) {
            answer[x][y] = num++;

            int nx = x + dx[dir];
            int ny = y + dy[dir];

            if (nx < 0 || nx >= n || ny < 0 || ny >= n || answer[nx][ny] != 0) {
                
                dir = (dir + 1) % 4;
                nx = x + dx[dir];
                ny = y + dy[dir];
                
            }

            x = nx;
            y = ny;
        }

        return answer;
    }
}

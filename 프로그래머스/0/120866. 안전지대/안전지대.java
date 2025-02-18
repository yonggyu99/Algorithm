class Solution {
    public int solution(int[][] board) {
        int n = board.length;
        boolean[][] dangerZone = new boolean[n][n];


        int[] dx = {-1, -1, -1, 0, 0, 1, 1, 1};
        int[] dy = {-1, 0, 1, -1, 1, -1, 0, 1};


        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 1) {
                    dangerZone[i][j] = true;

                    for (int k = 0; k < 8; k++) {
                        int ni = i + dx[k];
                        int nj = j + dy[k];
                        if (ni >= 0 && ni < n && nj >= 0 && nj < n) {
                            dangerZone[ni][nj] = true;
                        }
                    }
                }
            }
        }


        int safeCount = 0;
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 0 && !dangerZone[i][j]) {
                    safeCount++;
                }
            }
        }

        return safeCount;
    }
}

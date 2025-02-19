import java.util.Arrays;

class Solution {
    public int solution(int[] mats, String[][] park) {
        // 1. 돗자리 크기 내림차순 정렬
        Arrays.sort(mats);
        int n = park.length;
        int m = park[0].length;
        
        // 2. 큰 돗자리부터 확인
        for (int i = mats.length - 1; i >= 0; i--) {
            int size = mats[i];

            // 3. 공원에서 해당 크기의 돗자리를 놓을 수 있는지 확인
            for (int r = 0; r <= n - size; r++) {
                for (int c = 0; c <= m - size; c++) {
                    if (canPlaceMat(park, r, c, size)) {
                        return size; // 가장 큰 돗자리 크기 반환
                    }
                }
            }
        }

        return -1; // 아무 돗자리도 놓을 수 없는 경우
    }

    // 돗자리를 놓을 수 있는지 확인하는 함수
    private boolean canPlaceMat(String[][] park, int r, int c, int size) {
        for (int i = 0; i < size; i++) {
            for (int j = 0; j < size; j++) {
                if (!park[r + i][c + j].equals("-1")) {
                    return false;
                }
            }
        }
        return true;
    }
}
class Solution {
    public int solution(int[][] dots) {
        // 점 조합 3가지 경우의 기울기 비교
        if (isParallel(dots[0], dots[1], dots[2], dots[3]) ||
            isParallel(dots[0], dots[2], dots[1], dots[3]) ||
            isParallel(dots[0], dots[3], dots[1], dots[2])) {
            return 1;
        }
        return 0;
    }

    // 두 선분의 기울기를 비교하는 함수
    private boolean isParallel(int[] a, int[] b, int[] c, int[] d) {
        // 기울기 비교 (y2 - y1) * (x4 - x3) == (y4 - y3) * (x2 - x1) 방식 사용
        return (b[1] - a[1]) * (d[0] - c[0]) == (d[1] - c[1]) * (b[0] - a[0]);
    }
}

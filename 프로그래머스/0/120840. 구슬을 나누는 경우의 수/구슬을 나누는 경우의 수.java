class Solution {
    public int solution(int balls, int share) {
        return combination(balls, share);
    }

    // 조합 계산: C(n, r) = n! / (r! * (n - r)!)
    private int combination(int n, int r) {
        if (r == 0 || n == r) return 1; // nC0 = 1, nCn = 1
        return combination(n - 1, r - 1) + combination(n - 1, r);
    }
}

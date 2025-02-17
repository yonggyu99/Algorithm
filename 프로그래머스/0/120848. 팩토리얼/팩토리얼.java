class Solution {
    public int solution(int n) {
        int factorial = 1; // 초기 팩토리얼 값
        int k = 0; // 최대 정수 k

        for (int i = 1; factorial <= n; i++) {
            k = i;
            factorial *= (i + 1);
        }

        return k;
    }
}

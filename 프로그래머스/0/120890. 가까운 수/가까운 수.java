import java.util.Arrays;

class Solution {
    public int solution(int[] array, int n) {
        Arrays.sort(array);

        int closest = array[0];
        int minDiff = Math.abs(n - closest);

        for (int num : array) {
            int diff = Math.abs(n - num);

            if (diff < minDiff) {
                minDiff = diff;
                closest = num;
            } else if (diff == minDiff && num < closest) {
                closest = num;
            }
        }

        return closest;
    }
}

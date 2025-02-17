import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

class Solution {
    public int[] solution(int[] emergency) {
        int[] sorted = emergency.clone(); // 원본 배열 복사
        Arrays.sort(sorted); // 오름차순 정렬 (작은 값 → 큰 값)

        Map<Integer, Integer> rankMap = new HashMap<>();
        int length = sorted.length;

        // 큰 값부터 작은 값까지 순위 매기기
        for (int i = 0; i < length; i++) {
            rankMap.put(sorted[i], length - i);
        }

        // 원래 배열의 순서대로 순위를 반환
        int[] result = new int[length];
        for (int i = 0; i < length; i++) {
            result[i] = rankMap.get(emergency[i]);
        }

        return result;
    }
}

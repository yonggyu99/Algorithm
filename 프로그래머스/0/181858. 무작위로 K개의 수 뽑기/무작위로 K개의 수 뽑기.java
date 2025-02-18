import java.util.ArrayList;
import java.util.List;

class Solution {
    public int[] solution(int[] arr, int k) {
        List<Integer> resultList = new ArrayList<>();
        for (int num : arr) {
            if (resultList.size() == k) {
                break;
            }
            if (!resultList.contains(num)) {
                resultList.add(num);
            }
        }

        int[] result = new int[k];
        for (int i = 0; i < k; i++) {
            if (i < resultList.size()) {
                result[i] = resultList.get(i);
            } else {
                result[i] = -1;
            }
        }
        return result;
    }
}
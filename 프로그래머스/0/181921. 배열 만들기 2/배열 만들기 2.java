import java.util.*;

class Solution {
    public int[] solution(int l, int r) {
        List<Integer> answer = new ArrayList<>();

        for (int i = l; i <= r; i++) {
            int num = i;
            boolean fiveOrZero = true;
            
            while (num > 0) {
                int k = num % 10;
                if (k != 0 && k != 5) {
                    fiveOrZero = false;
                    break;
                }
                num /= 10;
            }
            
            if (fiveOrZero) {
                answer.add(i);
            }
        }

        if (answer.isEmpty()) {
            int[] empty = new int[1];
            empty[0] = -1;
            return empty;
        }


        return answer.stream().mapToInt(Integer::intValue).toArray();
    }
}

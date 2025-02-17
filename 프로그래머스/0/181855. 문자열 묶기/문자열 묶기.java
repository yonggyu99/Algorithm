import java.util.*;

class Solution {
    public int solution(String[] strArr) {
        Map<Integer, Integer> lengthCount = new HashMap<>();

        for (String str : strArr) {
            int len = str.length();
            
            if (lengthCount.containsKey(len)) {
                lengthCount.put(len, lengthCount.get(len) + 1);
            } else {
                lengthCount.put(len, 1);
            }
        }

        return Collections.max(lengthCount.values());
    }
}

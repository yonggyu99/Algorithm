import java.util.*;

class Solution {
    public String[] solution(String[] str_list) {
        List<String> result = new ArrayList<>();


        int lIndex = -1, rIndex = -1;
        for (int i = 0; i < str_list.length; i++) {
            if (str_list[i].equals("l")) {
                lIndex = i;
                break;
            }
            if (str_list[i].equals("r")) {
                rIndex = i;
                break;
            }
        }

        if (lIndex != -1) {
            return Arrays.copyOfRange(str_list, 0, lIndex);
        }

        if (rIndex != -1) {
            return Arrays.copyOfRange(str_list, rIndex + 1, str_list.length);
        }

        return new String[0];
    }
}

import java.util.Arrays;

class Solution {
    public int solution(String before, String after) {
        // 문자열 정렬 같은지 확인
        char[] beforeArr = before.toCharArray();
        char[] afterArr = after.toCharArray();

        Arrays.sort(beforeArr);
        Arrays.sort(afterArr);

        // 정렬 후 같은 문자열이면 1, 아니면 0 반환
        return Arrays.equals(beforeArr, afterArr) ? 1 : 0;
    }
}

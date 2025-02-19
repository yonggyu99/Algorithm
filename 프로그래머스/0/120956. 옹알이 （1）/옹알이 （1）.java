class Solution {
    public int solution(String[] babbling) {
        int count = 0;
        String pattern = "^(aya|ye|woo|ma)+$"; // 유효한 단어 패턴
        String repeatPattern = "(aya|ye|woo|ma)\\1"; // 연속 반복 금지

        for (String word : babbling) {
            if (word.matches(pattern) && !word.matches(repeatPattern)) {
                count++;
            }
        }

        return count;
    }
}

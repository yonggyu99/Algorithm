import java.util.LinkedHashSet;

class Solution {
    public String solution(String my_string) {
        StringBuilder answer = new StringBuilder();
        LinkedHashSet<Character> seen = new LinkedHashSet<>();

        for (char ch : my_string.toCharArray()) {
            if (!seen.contains(ch)) { // 중복이 아니라면 추가
                seen.add(ch);
                answer.append(ch);
            }
        }

        return answer.toString();
    }
}

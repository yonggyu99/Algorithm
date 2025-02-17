import java.util.*;

class Solution {
    public String solution(String letter) {
        // a~z에 해당하는 모스부호 배열
        String[] morse = {
            ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---",
            "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-",
            "..-", "...-", ".--", "-..-", "-.--", "--.."
        };
        
        // 알파벳 배열
        char[] alphabet = "abcdefghijklmnopqrstuvwxyz".toCharArray();

        // 모스부호를 문자로 매핑하는 HashMap 생성
        Map<String, String> morseMap = new HashMap<>();
        for (int i = 0; i < alphabet.length; i++) {
            morseMap.put(morse[i], String.valueOf(alphabet[i]));
        }

        // 입력된 모스부호를 해독
        StringBuilder result = new StringBuilder();
        String[] words = letter.split(" "); // 공백 기준으로 모스부호 분리

        for (String code : words) {
            result.append(morseMap.get(code)); // 모스부호를 문자로 변환하여 추가
        }

        return result.toString();
    }
}

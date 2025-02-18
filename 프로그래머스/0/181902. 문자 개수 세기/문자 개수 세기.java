class Solution {
    public int[] solution(String my_string) {
        int[] answer = new int[52];
        
        for(char c : my_string.toCharArray()){
            if(Character.isLowerCase(c)){
                answer[c - 'a' + 26]++;
            }
            else if(Character.isUpperCase(c)){
                answer[c - 'A']++;
            }
        }
        return answer;
    }
}
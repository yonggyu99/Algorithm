import java.util.Arrays;
class Solution {
    public String[] solution(String myString) {
        String[] splitArr = myString.split("x");
        int size = 0;
        for(String s : splitArr){
            if(!s.isEmpty()){
                size ++;
            }
        }
        String[] answer = new String[size];
        int index = 0;
        for(String s : splitArr){
            if(!s.isEmpty()){
                answer[index++] = s;
            }
        }
        Arrays.sort(answer);
        return answer;
    }
}
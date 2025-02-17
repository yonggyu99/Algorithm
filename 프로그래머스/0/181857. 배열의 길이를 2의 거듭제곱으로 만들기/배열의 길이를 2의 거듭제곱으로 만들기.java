import java.util.ArrayList;

class Solution {
    public int[] solution(int[] arr) {
        int length = arr.length;
        
        int size = 1;
        
        while(size < length){
            size *= 2;
        }
        
        int[] answer = new int[size];
        
        for(int i = 0 ; i < length; i ++){
            answer[i] = arr[i];
            
        }
        
        return answer;
    }
}
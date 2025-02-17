import java.util.*;

class Solution {
    public int[] solution(int n) {
        Set<Integer>item = new LinkedHashSet();
        
        for(int i = 2; i*i <= n; i++){
            while(n % i == 0){
                item.add(i);
                n/=i;
            }
        }
        
        if(n > 1){
            item.add(n);
        }
        
        int [] answer = new int[item.size()];
        int index = 0;
        
        for(int i : item){
            answer[index++] = i;
        }
        return answer;
    }
}
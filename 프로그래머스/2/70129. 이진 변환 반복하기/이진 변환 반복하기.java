class Solution {
    public int[] solution(String s) {
        int transformCount = 0;
        int zeroCount = 0;
        
        while(!s.equals("1")){
            int length = s.length();
            
            s= s.replaceAll("0", "");
            int newLength = s.length();
            
            zeroCount = zeroCount + (length - newLength);
            
            s = Integer.toBinaryString(newLength);
            
            transformCount ++;
        }
        int [] answer = {transformCount, zeroCount};
        
        return answer;
    }
}
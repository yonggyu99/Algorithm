class Solution {
    public int solution(int[][] lines) {
        int [] arr = new int [201];
        int answer = 0;
        
        for(int [] line : lines){
            int start = line[0] + 100;
            int end = line[1] + 100;
        
        
            for(int i = start; i < end; i++){
                arr[i]++;
            }
        }
        
        for(int i = 0; i < 200; i++){
            if(arr[i]  >= 2){
                answer ++;
            }
        }
        return answer;
    }
}
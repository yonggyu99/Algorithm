class Solution {
    public int solution(int n) {
        int answer = 0;
        int k = 1234567;
        if(n == 2){
            return 1;
        }
        
        int a = 0, b= 1, temp;
        
        for(int i = 2; i <= n; i++){
            temp = (a+b) % k;
            a = b;
            b = temp;
        }
        
        return b;
    }
}
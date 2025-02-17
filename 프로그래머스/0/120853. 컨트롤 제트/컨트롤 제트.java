class Solution {
    public int solution(String s) {
        String[] strArr = s.split(" ");
        int sum = 0;
        int last = 0;
        
        for(String i : strArr){
            if(i.equals("Z")){
                sum = sum - last;
            }
            else{
                last = Integer.parseInt(i);
                sum = sum + last;
            }
        }
        
        return sum;
    }
}
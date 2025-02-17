class Solution {
    public String solution(String my_string, int s, int e) {
        String sub1 = my_string.substring(0, s);
        
        String reverse = new StringBuilder(my_string.substring(s, e + 1)).reverse().toString();
        
        String sub2 = my_string.substring(e+1);
        return sub1 + reverse + sub2;
    }
}
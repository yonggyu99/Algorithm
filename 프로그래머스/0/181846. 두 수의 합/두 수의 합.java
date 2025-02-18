import java.math.BigInteger;

class Solution {
    public String solution(String a, String b) {
        BigInteger answer1 = new BigInteger(a);
        BigInteger answer2 = new BigInteger(b);
        
        BigInteger sum = answer1.add(answer2);
        
        return sum.toString();
    }
}
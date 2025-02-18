import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String str = sc.next();
        
        StringBuilder result = new StringBuilder();
        
        for (int i = 0; i < str.length(); i++) {
            char ch = str.charAt(i);
            
            if (Character.isLowerCase(ch)) {
                result.append(Character.toUpperCase(ch));
            }
            else {
                result.append(Character.toLowerCase(ch));
            }
        }
        
        System.out.println(result.toString());
    }
}
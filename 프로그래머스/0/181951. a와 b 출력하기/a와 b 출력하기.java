import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        StringBuilder sb = new StringBuilder(); 
        int a = sc.nextInt();
        int b = sc.nextInt();
        sb.append("a = ").append(a).append("\n").append("b = ").append(b);
        System.out.println(sb);
        sc.close();
    }
}
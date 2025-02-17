import java.util.*;

class Solution {
    public int solution(int[] sides) {
        Arrays.sort(sides); // 두 변을 정렬
        int min = sides[0]; // 작은 변
        int max = sides[1]; // 큰 변


        int side1 = max - (max - min + 1) + 1;

        int side2 = (min + max) - max - 1;

        return side1 + side2;
    }
}

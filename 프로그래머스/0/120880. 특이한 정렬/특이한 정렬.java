import java.util.Arrays;
import java.util.Comparator;

class Solution {
    public int[] solution(int[] numlist, int n) {
        Integer[] arr = new Integer[numlist.length];
        for (int i = 0; i < numlist.length; i++) {
            arr[i] = numlist[i];
        }

 
        Arrays.sort(arr, new Comparator<Integer>() {
            @Override
            public int compare(Integer a, Integer b) {
                int diffA = Math.abs(a - n);
                int diffB = Math.abs(b - n);
                
                if (diffA == diffB) {
                    return b - a;
                }
                return diffA - diffB;
            }
        });


        int[] result = new int[arr.length];
        for (int i = 0; i < arr.length; i++) {
            result[i] = arr[i];
        }
        return result;
    }
}

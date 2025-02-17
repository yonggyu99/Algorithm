import java.util.Arrays;

class Solution {
    public int solution(int[] arr) {
        int answer = 0;
        int count;
        int[] preArr;

        while (true) {
            count = 0;
            preArr = arr.clone();

            for (int i = 0; i < arr.length; i++) {
                if (arr[i] % 2 == 0 && arr[i] >= 50) {
                    arr[i] /= 2;
                } 
                else if (arr[i] % 2 != 0 && arr[i] < 50) {
                    arr[i] = arr[i] * 2 + 1;
                }

                if (arr[i] == preArr[i]) {
                    count++;
                }
            }

            answer++;

            if (count == arr.length){
                return answer - 1;
            }
        }
    }
}

class Solution {
    public int solution(String A, String B) {
        String rotated = A;
        int length = A.length();

        for (int i = 0; i < length; i++) {
            if (rotated.equals(B)) {
                return i;
            }
            rotated = rotated.charAt(length - 1) + rotated.substring(0, length - 1);
        }

        return -1;
    }
}

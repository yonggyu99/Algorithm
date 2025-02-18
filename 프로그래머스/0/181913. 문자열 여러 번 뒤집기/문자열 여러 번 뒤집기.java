class Solution {
    public String solution(String my_string, int[][] queries) {
        for (int i = 0; i < queries.length; i++) {
            int s = queries[i][0];
            int e = queries[i][1];
            String sub1 = my_string.substring(0, s);
            String reverse = new StringBuilder(my_string.substring(s, e + 1)).reverse().toString();
            String sub2 = my_string.substring(e + 1);
            my_string = sub1 + reverse + sub2;
        }
        return my_string;
    }
}
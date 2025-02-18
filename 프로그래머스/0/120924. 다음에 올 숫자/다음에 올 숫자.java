class Solution {
    public int solution(int[] common) {
        int n = common.length;
        int last = common[n - 1];

        if (common[1] - common[0] == common[2] - common[1]) {
   
            int diff = common[1] - common[0];
            return last + diff;
        } 
        else {

            int ratio = common[1] / common[0];
            return last * ratio;
        }
    }
}

class Solution {
    public int solution(String[][] board, int h, int w) {
        int n = board.length;
        int count = 0;
        String color = board[h][w];
        
        int[] dh = {-1, 1, 0, 0}; // 상하-행변경
        int[] dw = {0, 0, -1, 1}; // 좌우-열변경

        
        for(int i = 0; i < 4; i++){
            int nw = w + dw[i];
            int nh = h + dh[i];
            
            
            if(nh>=0 && nh<n && nw>=0 && nw<board[0].length){
                if(board[nh][nw].equals(color)){
                    count++;
                }
            }
        }
        
        
        return count;
    }
}
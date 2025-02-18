class Solution {
    public String[] solution(String[] picture, int k) {
        String[] answer = new String[picture.length * k];
        int i = 0;
        
        // 행마다 하나하나 처리할 것임
        for(int j = 0; j < picture.length; j++){
            StringBuilder sb = new StringBuilder(); // new행 저장할 곳
            // 행 인덱스마다
            for(int l = 0; l < picture[j].length(); l++){
                // 문자 k번 반복해서 new행에 저장
                for (int m = 0; m < k; m++) {
                    sb.append(picture[j].charAt(l));
                }
            } // 행 하나 끝
            
            String realAnswer = sb.toString();
            // 열로 k번 반복
            for(int n = 0; n < k; n++) {
                answer[i++] = realAnswer;
            }
        }
        return answer;
    }
}